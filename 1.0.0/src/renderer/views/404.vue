<template>
  <div class="page">
    <div class="hs" >
      <div class="icon">
        <img src="../assets/img/icon.jpg" alt="">
      </div>
    </div>
    <div class="title f14 tc">哎呀，页面走丢了~</div>
    <div class="btn f14 tc" @click="goBack">刷新</div>
  </div>
</template>

<script>
// import Address from '../fetch/Address.js'
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    goBack () {
      location.reload()
    }
  }
}
</script>

<style  scoped>
/* lang='less'
.hs {
  margin-top: 175/75rem;
  .icon {
    width: 278/75rem;
    height: 220/75rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
} */

.title {
  height: 70/75rem;
  line-height: 70/75rem;
}

.btn {
  margin: 0 auto;
  box-sizing: border-box;
  width: 160/75rem;
  height: 60/75rem;
  line-height: 60/75rem;
  border: 1px solid #d6d5d5;
  border-radius: 4px;
}
</style>
