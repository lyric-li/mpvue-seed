import httpclient from '@/utils/httpclient'
import * as user from '@/api/user'

const state = {
  // 微信用户信息
  wx_info: ''
}

const getters = {
  // 重新计算用户信息 (有 -> 直接返回, 没有 -> 从 Storage 里取 -> 返回)
  getter_wx_info: state => {
    let wx_info = state.wx_info
    if (!wx_info) {
      let storage = wx.getStorageSync('wx_info')
      if (storage) {
        wx_info = JSON.parse(storage)
      }
    }
    return wx_info
  }
}

const actions = {
  // demo
  demo ({ commit }) {
    return new Promise((resolve, reject) => {
      httpclient.get(
        user.demo
      ).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取微信用户信息
  getWXUserInfo ({ commit }) {
    return new Promise((resolve) => {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              commit('SET_WXUSER_INFO', res.userInfo)
              resolve(res)
            }
          })
        }
      })
    })
  }
}

const mutations = {
  // 设置微信用户信息
  SET_WXUSER_INFO (state, info) {
    state.wx_info = info
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
