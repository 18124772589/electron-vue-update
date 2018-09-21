<template>
  <div class="header">
    
      <!-- 头部导航 -->
      <div class="searchBox">
        <div>
          <i class="el-icon-zoom-out"></i>
          <input type="text" placeholder="搜索联系人、群组、聊天记录等">
        </div>
      </div>
      <div class="setUser">
        <div>
          <i class="el-icon-document"></i> 
        </div>
        <div>
          <i class="el-icon-document"></i> 
        </div>
        <div>
          <i class="el-icon-document"></i>  
        </div>
        <div class="user" @click="openSetUser">
          <div>
            <img src="../../assets/img/default-user.jpg" alt="">
          </div>
          <i class="el-icon-caret-bottom f12"></i>
        </div>
      </div>
      <!-- <ul class="setWindows">
        <li>
           <a href="javascript:void(0)" @click="minWindows">
                <i class="el-icon-minus"></i>
            </a>
        </li>
        <li>
           <a href="javascript:void(0)" @click="maxWindows">
                <i class="el-icon-plus"></i>
            </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="closeWindows">
                <i class="el-icon-close"></i>
            </a>
        </li>
      </ul> -->
      <div class="setUserLIst" v-if="showSetUser">
        <div class="title">
          <div class="userTxt">
            <span>马圆</span>
          </div>
          <div class="viaImg">
            <img src="../../assets/img/default-user.jpg" alt="">
          </div>
        </div>
        <ul class="system">
          <li>系统设置</li>
          <li>修改密码</li>
        </ul>
        <ul class="manage">
          <li>机器人管理</li>
        </ul>
        <ul class="help">
          <li>帮助反馈</li>
          <li>下载手机版</li>
          <li>关于钉钉</li>
        </ul>
        <ul class="exit">
          <li>退出登录</li>
        </ul>
      </div>
  </div>
</template>

<script>
const ipcRenderer=require("electron").ipcRenderer;

export default {
  components: {},
  data () {
    return {
      showSetUser:false
    }
  },
  methods: {
    // minWindows() {
    //   ipcRenderer.send('min-window');
    // },
    // maxWindows() {
    //   ipcRenderer.send('max-window');
    // },
    // closeWindows() {
    //   ipcRenderer.send('close-window');
    // },
    openSetUser(){
      this.showSetUser=!this.showSetUser;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  height: 55px;
  background-size: auto 28px !important;
  border-bottom: 1px solid #e6e5e6;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .searchBox{
    flex:3;
    padding:8px 20px 10px 8px;
    height: 100%;
    box-sizing: border-box;
    >div{
      background:#F5F6F7;
      height:100%;
      display: flex;
      align-items: center;
      padding:5px;
      box-sizing: border-box;
      input{
        border:none;
        background: none;
        margin:5px 0;
        padding:4px 5px;
        flex:1;
      }
    }
    
  }
  .setUser{
    flex:2;
    display: flex;
    justify-content: flex-end;
    >div{
      padding:0 15px;
      margin:auto 0;
      &:not(:last-child){
        i{
          font-size:18px;
        }
      }
    }
    .user{
      display: flex;
      align-items: center;
      >div{
        width:30px;
        height:30px;
        border-radius: 50%;
        overflow: hidden;
      }
      
    }
  }
  .setWindows{
    border-left:1px solid #e6e5e6;
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    li{
      padding:0 8px;
    }
  }
}
.setUserLIst{
  position: absolute;
  right:10px;
  top:55px;
  background: #fff;
  white-space: nowrap;
  z-index: 102;
  border: 1px solid #e4e7ed;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  >ul{
    padding:5px 0;
  }
  >ul:not(:first-child){
    border-top:1px solid #e6e5e6;
  }
  >ul li{
    margin:auto;
    padding:10px 15px;
    &:hover{
      background:#F5F6F7;
    }
  }
  .title{
    padding:10px 15px;
    display: flex;
    justify-content: center;
    .userTxt{
      flex:3;
      margin:auto 80px auto 0;
    }
    .viaImg{
      width:40px;
      height:40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .system{

  }
  .manage{

  }
  .help{

  }
  .exit{

  }
}

</style>
