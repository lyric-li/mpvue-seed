<template>
  <web-view :src="target"
            @message="messageHandler"
  >
  </web-view>
</template>

<script>
import cookie from '@/utils/httpclient/cookie'
import { mapState } from 'vuex'
export default {
  name: 'webview',
  data () {
    return {
      target: ''
    }
  },
  computed: {
    ...mapState({
      url: state => state.webview.url
    })
  },
  onLoad (query) {
    const target = query.target
    if (target) {
      const Cookie = cookie.getCookie()
      this.target = `${target}?PHPSESSID=${Cookie.PHPSESSID}`
    } else {
      this.target = this.url
    }
    console.log('target:', this.target)
  },
  methods: {
    // 处理网页传递的消息
    messageHandler (e) {
      const data = e.mp.detail.data
      console.log('message data:', data)
    }
  }
}
</script>
