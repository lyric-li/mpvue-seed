import Vue from 'vue'

const resetData = {
  install: function () {
    Vue.mixin({
      onUnload () {
        if (this.$options.data) {
          Object.assign(this.$data, this.$options.data())
        }
      }
    })
  }
}

export default resetData
