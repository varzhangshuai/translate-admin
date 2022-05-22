import { loginApi } from '@/api/index'

const state = () => ({
  token: '', // 登录token
  info: {},  // 用户信息
})

// getters
const getters = {
  token(state) {
    return state.token
  }
}

// mutations
const mutations = {
  tokenChange(state, token) {
    state.token = token
  }
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      loginApi(params)
        .then(res => {
        commit('tokenChange', res.data)
        resolve(res)
      })
    })
  },

  // login out the system after user click the loginOut button
  loginOut({ commit }) {
    commit('tokenChange', '')
    localStorage.removeItem('tabs')
    localStorage.removeItem('vuex')
    location.reload()
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}