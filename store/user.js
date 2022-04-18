export const state = () => ({
  userList: []
})

// 동기적인 상태값 변경 만 함
export const mutations = {
  get_Users (state, payload) {
    state.userList = payload
  },
  set_Update (state, payload) {
    Object.assign(state.userList, payload)
  },
  set_RegistInfo (state, payload) {
    state.userList.push(payload)
  },
  set_RemoveInfo (state, payload) {
    state.userList.splice(state.userList.indexOf(payload), 1)
  }
}

// 비동기 상태볁경또는 어떤 연산 api
export const actions = {
}

export const getters = {
  getTodoById (state) {
    return state.userList
  }
}
