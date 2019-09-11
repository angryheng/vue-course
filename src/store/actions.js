import { getAppName } from '@/api/app'

const actions = {
  // updateAppName: ({ commit }) => {
  //   getAppName().then((res) => {
  //     // const { code, info: { appName } } = res
  //     const { code, info } = res
  //     commit('SET_APP_NAME', info)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  /* 使用 ES8 的异步方法 */
  async updateAppName({ commit }) {
    try {
      const { code, info } = await getAppName()
      commit('SET_APP_NAME', info)
    } catch (e) {
      console.log(e)
    }
  }
}
export default actions
