function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

const cookie = {

  PHPSESSID: '',

  // 获取 Cookie
  getCookie () {
    let PHPSESSID = this.PHPSESSID
    if (!PHPSESSID) {
      PHPSESSID = wx.getStorageSync('PHPSESSID')
    }
    return {
      PHPSESSID
    }
  },
  // 设置 Cookie
  setCookie (Cookie) {
    const Cookies = Cookie.split(';')
    if (Cookies.length === 0) return
    Cookies.forEach(temp => {
      const temps = temp.split('=')
      const key = trim(temps[0])
      const value = temps[1]
      switch (key) {
        case 'PHPSESSID':
          this.PHPSESSID = value
          wx.setStorageSync('PHPSESSID', value)
          break
      }
    })
  }
}

export default cookie
