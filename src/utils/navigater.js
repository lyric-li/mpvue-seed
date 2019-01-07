// {key1: value1, key2: value2} ==> key1=value1&key2=value2
const objToQuery = params => {
  let query = ''
  if (params) {
    const querys = []
    Object.keys(params).forEach(key => {
      const temp = `${key}=${params[key]}`
      querys.push(temp)
    })
    query = querys.join('&')
  }
  return query
}

// 小程序导航封装
const navigater = {
  // 保留当前页面，跳转到应用内的某个页面，使用 navigateBack 可以返回到原页面
  navigateTo (url, params) {
    return new Promise((resolve, reject) => {
      const query = objToQuery(params)
      if (query) {
        url = `${url}?${query}`
      }
      console.log('url:', url)
      wx.navigateTo({
        url,
        success: res => {
          resolve(res)
        },
        fail: err => {
          console.error(err)
          reject(err)
        }
      })
    })
  },
  // 关闭当前页面，返回上一页面或多级页面
  navigateBack (delta) {
    wx.navigateBack({
      delta
    })
  },
  // 关闭当前页面，跳转到应用内的某个页面
  redirectTo (url, params) {
    return new Promise((resolve, reject) => {
      const query = objToQuery(params)
      if (query) {
        url = `${url}?${query}`
      }
      console.log('url:', url)
      wx.redirectTo({
        url,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },
  // 关闭所有页面，打开到应用内的某个页面
  reLaunch (url, params) {
    return new Promise((resolve, reject) => {
      const query = objToQuery(params)
      if (query) {
        url = `${url}?${query}`
      }
      console.log('url:', url)
      wx.reLaunch({
        url,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },
  // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  switchTab (url) {
    return new Promise((resolve, reject) => {
      wx.switchTab({
        url,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
}

export default navigater
