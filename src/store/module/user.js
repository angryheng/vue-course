const state = {
  userName: 'angryheng'
}
const getters = {
  firstLetter: (state) => state.userName.substr(0, 1)
}
const mutations = {}
const actions = {
  updateUserName: ({
    commit, state, rootState, dispatch
  }) => {
    // state 当前页面的 state
    // rootState 全局的 state
    // dispatch('demoAction', '')
  }
  /*
  demoAction: ({commit}) =< {}
  */
}

export default {
  // namespaced: true, 开启命名空间防止模块被污染  未开启命名空间时，...mapGetters 不用写模块名
  state,
  getters,
  mutations,
  actions
}
