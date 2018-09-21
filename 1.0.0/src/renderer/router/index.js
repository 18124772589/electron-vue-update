import Vue from 'vue'
import Router from 'vue-router'

// 404 页面
const noFound = resolve => require(['../views/404.vue'], resolve)
// 消息模块
const message = resolve => require(['../views/message/message.vue'], resolve)
const messageList = resolve => require(['../views/message/list.vue'], resolve)
const messageDetails = resolve => require(['../views/message/details.vue'], resolve)

// 钉钉模块
const dingTalk = resolve => require(['../views/dingTalk/dingTalk.vue'], resolve)
const dingList = resolve => require(['../views/dingTalk/list.vue'], resolve)
const dingDetails = resolve => require(['../views/dingTalk/details.vue'], resolve)

// 通讯录模块
const addressBook = resolve => require(['../views/addressBook/addressBook.vue'], resolve)
const addressBookList = resolve => require(['../views/addressBook/list.vue'], resolve)
const addressBookDetails = resolve => require(['../views/addressBook/details.vue'], resolve)

// 电话模块
const phone = resolve => require(['../views/phone/phone.vue'], resolve)
const phoneList = resolve => require(['../views/phone/list.vue'], resolve)
const phoneDetails = resolve => require(['../views/phone/details.vue'], resolve)

// 钉盘模块
const plate = resolve => require(['../views/plate/plate.vue'], resolve)
const plateList = resolve => require(['../views/plate/list.vue'], resolve)
const plateDetails = resolve => require(['../views/plate/details.vue'], resolve)

// 工作模块
const work = resolve => require(['../views/work/work.vue'], resolve)
const workList = resolve => require(['../views/work/list.vue'], resolve)
const workDetails = resolve => require(['../views/work/details.vue'], resolve)

// 钉邮模块
const mail = resolve => require(['../views/mail/mail.vue'], resolve)
const mailList = resolve => require(['../views/mail/list.vue'], resolve)
const mailDetails = resolve => require(['../views/mail/details.vue'], resolve)

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'tab-active',
  routes: [{
    path: '/',
    redirect: {
      name: 'message'
    }
  }, { // 消息模块
    path: '/message',
    name: 'message',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: message
    }
  }, { // 消息列表
    path: '/message/messageList',
    name: 'messageList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: messageList
  }, { // 消息详情
    path: '/message/messageDetails/:messageId',
    name: 'messageDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: messageDetails
  },
  { // 钉钉模块
    path: '/dingTalk',
    name: 'dingTalk',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: dingTalk
    }
  }, { // 钉钉列表
    path: '/dingTalk/dingList',
    name: 'dingList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: dingList
  }, { // 钉钉详情
    path: '/dingTalk/dingDetails/:dingTalkId',
    name: 'dingDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: dingDetails
  }, { // 通讯录模块
    path: '/addressBook',
    name: 'addressBook',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: addressBook
    }
  }, { // 通讯录列表
    path: '/addressBook/addressBookList',
    name: 'addressBookList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: addressBookList
  }, { // 通讯录详情
    path: '/addressBook/addressBookDetails/:addressBookId',
    name: 'addressBookDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: addressBookDetails
  }, { // 电话模块
    path: '/phone',
    name: 'phone',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: phone
    }
  }, { // 电话列表
    path: '/phone/phoneList',
    name: 'phoneList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: phoneList
  }, { // 电话详情
    path: '/phone/phoneDetails/:phoneId',
    name: 'phoneDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: phoneDetails
  },
  { // 钉盘模块
    path: '/plate',
    name: 'plate',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: plate
    }
  }, { // 钉盘列表
    path: '/plate/plateList',
    name: 'plateList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: plateList
  }, { // 钉盘详情
    path: '/plate/plateDetails/:plateId',
    name: 'plateDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: plateDetails
  }, { // 工作模块
    path: '/work',
    name: 'work',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: work
    }
  }, { // 工作列表
    path: '/work/workList',
    name: 'workList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: workList
  }, { // 工作详情
    path: '/work/workDetails/:workId',
    name: 'workDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: workDetails
  }, { // 钉邮模块
    path: '/mail',
    name: 'mail',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: {
      default: mail
    }
  }, { // 钉邮列表
    path: '/mail/mailList',
    name: 'mailList',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: mailList
  }, { // 钉邮详情
    path: '/mail/mailDetails/:mailId',
    name: 'mailDetails',
    meta: {
      title: ''
      // keepAlive: true
    },
    components: mailDetails
  }, {
    path: '/*',
    component: noFound
  }
  ]
})
