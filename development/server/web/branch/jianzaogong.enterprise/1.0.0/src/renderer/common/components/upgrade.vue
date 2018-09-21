<template>
    <div>
      <el-dialog title="版本升级说明" :visible.sync="updateModalShow" width="50%" >
        <div>
          <p>{{currentVersion}} → {{updateInfo.version}}</p>
          <div v-html="updateInfo.releaseNotes"></div>
          <p>更新时间：{{updateInfo.releaseDate}}</p>
          <!-- 下载进度 -->
          <div v-if="downloadInfo.percent !== null" class="percentage">
            <h3>{{updateText}}</h3>
            <el-progress :percentage="downloadInfo.percent" :text-inside="true" :stroke-width="18" status="success"></el-progress>
            <p v-if="downloadInfo.totalMB">大小：{{downloadInfo.totalMB}}MB</p>
            <p v-if="downloadInfo.KBPerSecond">速度：{{downloadInfo.KBPerSecond}}KB/s</p>
          </div>         
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeUpdateModal">取消</el-button>
          <el-button type="primary" @click="downloadConfirm" v-if="!isDownloadDone">下载最新版本</el-button>
          <el-button type="primary" @click="updateConfirm" v-else>确认升级，将重启应用</el-button>
        </span>
      </el-dialog>

     
      
    </div>
</template>
<script>
import packageJson from '../../../../package.json';
import moment from "moment";
const ipcRenderer=require("electron").ipcRenderer;

export default {
  components: {},
  data() {
    return {
      currentVersion: packageJson.version,
      downloadProgress: null,
      isDownloadDone:false, 
      updateText:"",
      downloadInfo: {
        percent: null,
        totalMB: 0,
        KBPerSecond: 0,
      },
      updateModalShow: false,
      updateInfo: {
        releaseNotes: '',
        releaseDate: '',
        version: '',
      },
    };
  },
  methods: {
    showUpdateModal() {
      this.updateModalShow = true;
    },
    downloadConfirm(){
      this.isDownloadDone = true;
      ipcRenderer.send('update-start');
    },
    updateConfirm() {
      if(this.downloadInfo.percent && this.downloadInfo.percent==100){
        this.updateModalShow = false;
        ipcRenderer.send('update-now');
      }
    },
    closeUpdateModal() {
      this.updateModalShow = false;
    },
    update() {
      if(window.require) {
        console.error('------开始检查更新------')
        ipcRenderer.send('checkForUpdate')
        ipcRenderer.on('message', (event,{message,text}) => {
          console.log('返回消息------------>',event,message, text)
          switch (message) {
            case 'error':
              this.$message.error('检查更新失败');
              break;
            /* case 'checking-for-update':
              this.updateText = '正在检查更新……';
              break;*/
            case 'update-available':
              this.updateText="检测到有可用的新版本";
              this.showUpdateModal();
              this.updateInfo = {
                releaseDate: moment(parseInt(moment(text.releaseDate).unix() + "000")).format("YYYY-MM-DD HH:mm:ss"),
                releaseName: text.releaseName,
                releaseNotes: text.releaseNotes,
                version: text.version,
              };
              break;
            case 'update-not-available':
              this.$message({
                message: '现在使用的就是最新版本'+text.version+'，不用更新',
                type: 'success'
              });
              break;
            case 'download-progress':
              this.updateText="";
              this.downloadInfo = {
                percent: text.percent.toFixed(2),
                totalMB: (text.total / 1024 / 1024).toFixed(3),
                KBPerSecond: (text.bytesPerSecond / 1024).toFixed(3),
              };
              break;
            case 'update-downloaded':
              this.updateText="";
              this.downloadInfo = {
                percent: 100,
                totalMB: "",
                KBPerSecond: "",
              };
              
              break;
            default:
              this.updateText="";
              this.downloadInfo = this.$options.data().downloadInfo;
          }
        });
      }
    },
  },
  created() {
    this.update();
  },
};
</script>
<style lang="less" scoped>
p{
  line-height: 25px;
}
.percentage{
  margin-top:20px;
}
</style>
