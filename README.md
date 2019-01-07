# mpvue-seed

> mpvue 种子项目

## Build Setup

``` bash
# install dependencies
yarn # npm install

# serve with hot reload at localhost:8080
yarn run dev # npm run dev

# build for trial with minification
yarn run build:trial # npm run build:trial

# build for production with minification
yarn run build:prod # npm run build:prod

# build for production and view the bundle analyzer report
yarn run build --report # npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


&nbsp;
## 目录规范
---

### *API*

统一管理模块的 url 请求地址， 如：`src/api/xxx.js`

### *资源管理*

- 重置小程序标签样式

  统一放在 `src/assets/styles/reset.scss` 文件

- 自定义全局样式

  统一放在 `src/assets/styles/custom.scss` 文件

### *状态管理*

  管理模块状态，存放在 `src/store/modules` 下，以模块命名，其中 `index.js` 作为模块统一处理文件，请勿修改

### *其它*

- 工具类

  存放在 `src/utils` 下


&nbsp;
## 开发规范
---

代码格式、命名规范等，以 `ESLint Standard` 规范为基础标准

- 字符串统一用 `''`
- 判断相等统一用 `===`


&nbsp;
## 注意事项
---

- 推荐使用 `yarn` 替代 `npm`. 由于网络环境仓库地址请设置成淘宝镜像(不推荐使用 `cnpm`)
  ```bash
  yarn config set registry http://registry.npm.taobao.org/
  npm config set registry http://registry.npm.taobao.org/
  ```

- 进入小程序, 每个页面的 `created` 钩子函数都会调用一次. 建议初始化方法放在 `onLoad` 调用.

- 基于 `Promise` 改造小程序原生导航

  ```javascript
  this.$navigater.navigateTo('/xxx/xxx', {
    xxx: 'xxx'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  ```

- 基于小程序 `request` 封装 `httpclient`

  ```javascript
  import httpclient from '@/utils/httpclient'

  httpclient.get('/xxx/xxx', {
    xxx: 'xxx'
  }).then(res => {
    console.log('success:', res)
  }).catch(err => {
    console.log('fail:', res)
  })
  ```


&nbsp;
## 技术栈
---

### *基础框架*

- [vue](https://cn.vuejs.org/)
- [vuex](https://vuex.vuejs.org/zh/)
- [mpvue](http://mpvue.com/)
- [iview weapp](https://weapp.iviewui.com/)
