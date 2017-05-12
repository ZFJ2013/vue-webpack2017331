// 组装模块并导出 store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: null // 用户信息
}

const mutations = {
  setUserInfo (state, info) {
    state.userInfo = info
    console.log(info)
    console.log('用户登录成功!')
  }
}

export default new Vuex.Store({
  state,
  mutations
})
