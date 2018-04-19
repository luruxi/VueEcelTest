const myStore = {
  state: {
    user: false
  },
  mutations: {
    // 登录
    login (state, user) {
      state.user = user
    },
    // 退出
    logout (state, user) {
      state.user = false
    }
  }
}

export default myStore
