import Vue from 'vue'
import App from './App'
import store from './store'
import resetData from './plugins/resetData'
import sleep from './utils/sleep'
import navigater from './utils/navigater'
import './utils/update'

console.log(`ENV: ${process.env.ENV_CONFIG}`)
console.log(`BASE_API: ${process.env.BASE_API}`)

// 安装插件
Vue.use(resetData)

// 绑定对象到 Vue 原型链
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()
Vue.prototype.$sleep = sleep
Vue.prototype.$navigater = navigater

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段是 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/example/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2d8cf0',
      navigationBarTitleText: 'Mpvue Seed',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      selectedColor: '#2d8cf0',
      list: [{
        pagePath: 'pages/example/main',
        text: '示例',
        iconPath: '/static/images/tabbar/example.png',
        selectedIconPath: '/static/images/tabbar/example_active.png'
      }, {
        pagePath: 'pages/webview/main',
        text: 'Webview',
        iconPath: '/static/images/tabbar/webview.png',
        selectedIconPath: '/static/images/tabbar/webview_active.png'
      }]
    },
    networkTimeout: {
      request: 30000
    },
    debug: false
  }
}
