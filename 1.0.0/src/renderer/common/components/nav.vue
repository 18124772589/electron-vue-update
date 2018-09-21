<template>
  <div class="nav">
      <!-- 侧边导航 -->
      <div class="profile">
        <ul>
          <li>
            <router-link :to="{ name: 'message' }">
              <div class="tip">
                <div class="tipimg  pr found">
                  <!-- 新消息提示原点 -->
                  <i class="yuandian iconfont icon-yuandian f13 pa" v-if="newsFound"></i>
                </div>
              </div>
              <div class="f12">消息</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'dingTalk'}">
              <div class="f12">DING</div>
            </router-link>
          </li>
          <li>
             <router-link :to="{ name: 'addressBook'}">
            <div class="f12">通讯录</div>
          </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'phone'}">
              <div class="f12">电话</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'plate'}">
              <div class="f12">钉盘</div>
            </router-link>
          </li>
        </ul>

        <ul>
          <li>
            <router-link :to="{ name: 'work'}">
              <div class="f12">工作</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'mail'}">
              <div class="f12">钉邮</div>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      newsFound: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76px;
  background-color: #499AFA;
  position: relative;
  border-right: 1px solid #dddcdd;
  border-bottom-left-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
  .profile{
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    &>ul{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &>ul li {
      flex: 0 1 47px;
      cursor: pointer;
      color: #707275;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 30px;
      a{
        color:#B7D9FD;
      }
      a:hover{
        color:#d8e9fc;
      }
      a.tab-active{
        color:#fff;
      }
    }
    &>ul:first-child{
      justify-content: flex-start;
    }
    &>ul:last-child {
      justify-content: flex-end;
    }
  }
}

</style>
