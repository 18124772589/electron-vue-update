<template>
  <div class="page">
    <Header></Header>
    <div class="page_content">
      <messageList @updateId="updateId"></messageList>
      <messageDetails :messageId="messageId"></messageDetails>
    </div>
  </div>
</template>

<script>
import messageList from './list.vue'
import messageDetails from './details.vue'
import Header from '../../common/components/header.vue'

export default {
  components: {
    messageList,
    messageDetails,
    Header
  },
  data () {
    return {
      messageId: ''
    }
  },
  created () {
    console.log('messageId', this.$route.params)
    this.messageId = this.$route.params.messageId
  },
  methods: {
    updateId (messageId) {
      this.messageId = messageId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .page{
    position: relative;
  }
</style>
