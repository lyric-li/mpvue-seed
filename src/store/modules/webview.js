const state = {
  url: 'https://gitee.com/lyric-li/mpvue-seed'
}

const actions = {

}

const mutations = {
  // 设置文件 URL
  SET_URL (state, url) {
    state.url = url
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
