<template>
  <div class="details">
    <div>
      {{messageId}}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['messageId'],
  data () {
    return {

    }
  },
  created () {
    console.log('messageId', this.messageId)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .details{
    width:100%;
  }
</style>
