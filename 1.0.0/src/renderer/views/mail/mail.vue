<template>
  <div class="page">
    <Header></Header> 
    {{msg}}
  </div>
</template>

<script>
import Header from '../../common/components/header.vue'
export default {
  components: {Header},
  data () {
    return {
      msg: 'mail'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
