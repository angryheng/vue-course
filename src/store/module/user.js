const state = {
  userName: 'angryheng'
}
const getters = {
  firstLetter: (state) => state.userName.substr(0, 1)
}
const mutations = {}
const actions = {}

export default {
  // namespaced: true,  未开启命名空间时，...mapGetters 不用写模块名
  state,
  getters,
  mutations,
  actions
}
