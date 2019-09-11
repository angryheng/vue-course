import Vue from 'vue'

const mutations = {
  SET_APP_NAME: (state, params) => {
    // params 为基本数据类型时
    // state.appName = params
    // params 为对象
    state.appName = params.appName
  },
  SET_APP_VERSION: (state) => {
    Vue.set(state, 'appVersion', '2.0')
    // state.appVersion = '2.0'
  }
}
export default mutations
