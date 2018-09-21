<template>
  <div class="conv-lists">
    <div v-for="(item, index) in dataList" class="conv-item" @click="goToDetails(item.messageId)">
        <i class="icon-safety-avatar" v-show="item.isSafety"></i>
        <div class="conv-item-content">
            <div class="title-wrap info">
                <div class="name-wrap">
                    <p class="name">
                        <span class="name-title">{{item.groupName}}</span>
                    </p>
                </div>
                <span class="time ">{{item.time}}</span>
            </div>
            <div class="latest-msg-info">
                <p class="latest-msg">
                    <span class="">[{{item.num}}条]</span>
                    <span class="ng-binding">{{item.text}}</span>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      dataList: [
        {
          messageId: 1,
          text: '吴锦萍: 下班回家路上大家注意安全[微笑]',
          groupName: '建造工特种部队',
          groupIcon:
            'https://static.dingtalk.com/media/lADPBY0V42JuICrNAljNAlg_600_600.jpg_60x60q90.jpg',
          time: '17:02',
          num: 7,
          type: '全员',
          isSafety: true
        },
        {
          messageId: 2,
          text: '吴锦萍: 下班回家路上大家注意安全[微笑]',
          groupName: '建造工特种部队',
          groupIcon:
            'https://static.dingtalk.com/media/lADPBY0V42JuICrNAljNAlg_600_600.jpg_60x60q90.jpg',
          time: '17:02',
          num: 7,
          type: '全员'
        },
        {
          messageId: 3,
          text: '吴锦萍: 下班回家路上大家注意安全[微笑]',
          groupName: '建造工特种部队',
          groupIcon:
            'https://static.dingtalk.com/media/lADPBY0V42JuICrNAljNAlg_600_600.jpg_60x60q90.jpg',
          time: '17:02',
          num: 7,
          type: '全员'
        }
      ]
    }
  },
  created () {
    this.$emit('updateId', this.dataList[0].messageId)
  },
  methods: {
    goToDetails (messageId) {
      console.log('000', messageId)
      this.$emit('updateId', messageId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.conv-lists .conv-item .icon-delete-conv {
  visibility: hidden;
  font-size: 12px;
  color: #7d7d7e;
  flex: 0 0 13px;
}
  .conv-lists .conv-item .icon-delete-conv.iconfont:hover:before, .conv-lists .conv-item .icon-delete-conv.iconfont:hover {
        color: #222; }
    .conv-lists .conv-item .avatar-wrap {
      flex: 0 0 38px;
      margin-right: 7px;
      width: 38px;
      height: 38px; }
      .conv-lists .conv-item .avatar-wrap .emoji {
        vertical-align: middle; }
    .conv-lists .conv-item .conv-item-content {
      flex: 1 1 auto;
      min-width: 0; }
      .conv-lists .conv-item .conv-item-content .title-wrap {
        display: flex;
        margin-bottom: 4px; }
        .conv-lists .conv-item .conv-item-content .title-wrap .name-wrap {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          align-items: center; }
          .conv-lists .conv-item .conv-item-content .title-wrap .name-wrap .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            font-size: 13px;
            color: #222;
            flex: 0 1 auto;
            display: flex; }
            .conv-lists .conv-item .conv-item-content .title-wrap .name-wrap .name .name-title {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
              flex: 0 0 auto;
              max-width: 100%; }
            .conv-lists .conv-item .conv-item-content .title-wrap .name-wrap .name work-status {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal; }
        .conv-lists .conv-item .conv-item-content .title-wrap .time {
          flex: 0 0 auto;
          color: #bdbebf;
          font-size: 12px;
          padding-left: 4px;
          -webkit-transform: scale(0.9);
          -moz-transform: scale(0.9);
          -ms-transform: scale(0.9);
          -o-transform: scale(0.9);
          transform: scale(0.9); }
      .conv-lists .conv-item .conv-item-content .latest-msg-info {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        height: 16px;
        min-width: 10px;
        color: #7d7d7e; }
        .conv-lists .conv-item .conv-item-content .latest-msg-info .latest-msg {
          flex: 1 1 auto;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          color: #777; }
        .conv-lists .conv-item .conv-item-content .latest-msg-info .noti {
          flex: 0 0 auto;
          min-width: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center; }
          .conv-lists .conv-item .conv-item-content .latest-msg-info .noti .icon-conv-mute {
            flex: 0 0 12px;
            font-size: 12px;
            color: #bdbebf;
            position: relative;
            bottom: -1px; }
          .conv-lists .conv-item .conv-item-content .latest-msg-info .noti .unread-num {
            flex: 0 0 auto; }
        .conv-lists .conv-item .conv-item-content .latest-msg-info .highlight {
          color: #ff943e; }
        .conv-lists .conv-item .conv-item-content .latest-msg-info .conv-item-last-msg-unread {
          color: #38adff; }
    .conv-lists .conv-item:hover {
      background-color: #e5f0fa; }
      .conv-lists .conv-item:hover .icon-delete-conv {
        visibility: visible; }
    .conv-lists .conv-item.active {
      background-color: #d5edfe; }
    .conv-lists .conv-item.conv-item-company .icon-company {
      display: block; }
    .conv-lists .conv-item .icon-cooperation {
      flex-shrink: 0;
      margin-left: 2px;
      height: 13px;
      width: 22px; }
      .conv-lists .conv-item .icon-cooperation.icon-cooperation-en {
        height: 13px;
        width: 13px; }
    .conv-lists .conv-item .icon-company {
      flex-shrink: 0;
      margin-left: 2px;
      display: none;
      width: 21px;
      height: 12px; }
      .conv-lists .conv-item .icon-company.icon-group-mrg {
        width: 21px;
        height: 12px; }
        .conv-lists .conv-item .icon-company.icon-group-mrg.icon-safety {
          width: 35px;
          height: 13px; }
        .conv-lists .conv-item .icon-company.icon-group-mrg.icon-en {
          width: 13px;
          height: 13px; }
          .conv-lists .conv-item .icon-company.icon-group-mrg.icon-en.icon-safety {
            width: 14px;
            height: 30px; }
      .conv-lists .conv-item .icon-company.icon-safety {
        width: 29px;
        height: 13px; }
      .conv-lists .conv-item .icon-company.icon-dept-company {
        width: 22px;
        height: 13px; }
        .conv-lists .conv-item .icon-company.icon-dept-company.icon-safety {
          width: 40px;
          height: 13px; }
      .conv-lists .conv-item .icon-company.icon-all-user-company {
        width: 22px;
        height: 13px; }
        .conv-lists .conv-item .icon-company.icon-all-user-company.icon-safety {
          width: 40px;
          height: 13px; }
      .conv-lists .conv-item .icon-company.icon-safety-single {
        width: 10px;
        height: 12px; }
    .conv-lists .conv-item.pin:before {
      content: " ";
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid dashed dashed;
      border-width: 6px 8px 0 0;
      border-color: #5ec9f6 transparent transparent; }
    .conv-lists .conv-item.notice-mute .unread-num {
      min-width: 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      bottom: 14px;
      right: 8px;
      text-indent: -9999em;
      padding: 0; }
</style>
