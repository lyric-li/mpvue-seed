// 手机号添加空格
export function addSpace (mobile) {
  if (!mobile) return
  mobile = mobile.trim()
  const mobiles = [
    mobile.substring(0, 3),
    mobile.substring(3, 7),
    mobile.substring(7, mobile.length)
  ]
  mobile = mobiles.join(' ')
  return mobile
}

// 手机号是否为空
export function isEmpty (mobile) {
  let bool = false
  if (mobile) bool = true
  return bool
}

// 手机号是否合法
export function isLegal (mobile) {
  let bool = false
  const reg = /^1\d{10}$/
  if (reg.test(mobile)) bool = true
  return bool
}
