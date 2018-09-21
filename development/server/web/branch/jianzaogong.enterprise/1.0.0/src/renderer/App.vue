<template>
  <div id="app">
    <div class="layout-container">
      <Nav></Nav> 
      <Upgrade></Upgrade>
      <keep-alive> 
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
// nav栏
import Nav from './common/components/nav.vue'
// 版本升级
import Upgrade from './common/components/upgrade.vue'

export default {
  name: 'app',
  computed: {},
  components: { Nav,Upgrade },
  data () {
    return {
    }
  },
  watch: {},
  created () { 
    //this.getMessage();
  },
  mounted() {
  },
  methods: {
    getMessage() {
      if(window.require) {
        console.error('------开始检查更新------')
        ipcRenderer.send('checkForUpdate')
        ipcRenderer.on('message', (event,{message,text}) => {
          console.log('返回消息------------>',event,message, text)
           switch (message) {
            case 'error':
              this.$message.error(text);
              break;
            /* case 'checking-for-update':
              this.$message.error(text);
              break;*/
            case 'updateAva':
              this.openUpdate();
              break;
            case 'updateNotAva':
              this.$message({
                message: text,
                type: 'success'
              });
              break;
            case 'download-progress':
              this.showProgress = true;
              this.progress = text.percent.toFixed(2);
              break;
            case 'update-downloaded':
              this.progress = text.percent.toFixed(2);
              setTimeout(()=>{
                this.showProgress = false;

              },3000)
              break;
            default:

          }
        })
      }
    },
    openUpdate(){
        this.$msgbox({
          title: this.appCurrentVersion+'版本说明',
          message:'<div><p>测试升级内容1</p><p>测试升级内容2</p><p>测试升级内容3</p></div>',
          dangerouslyUseHTMLString: true,
          showCancelButton: true,
          confirmButtonText: '确认升级，将重启应用',
          cancelButtonText: '取消升级，下次启动时再询问',
          beforeClose: (action, instance, done) => {
          console.log("点击",action, instance, done)
            if (action === 'confirm') {
              console.log("执行升级")
              ipcRenderer.send('update-downloaded');
            } else {
              console.log("取消升级")
              done();
            }
          }
        }).then(action => {
          console.log("点击后的回调",action)
        });
    }
  },
  beforeDestroy(){
    //ipcRenderer.removeAll(["message", "downloadProgress", "isUpdateNow"]);
  }
}
</script>

<style>
body{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#app{
  width: 100%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 4px 12px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
}
#app .layout-container{
 display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  flex-flow: row wrap;
  height: 542px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  flex: 0 1 auto;
  position: relative;
}

.page{
  flex: 1;
  height: 100%;
}
.page .page_content{
  display: flex;
}
</style>
