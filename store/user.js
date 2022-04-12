export const state = () => ({
  userList: []
})

export const mutations = {
  Users (state, payload) {
    state.userList = payload
  },
  upDate (state, payload) {
    Object.assign(state.userList, payload)
  },
  regiSter (state, payload) {
    state.userList.push(payload)
  }
}

export const actions = {
}

export const getters = {
  getTodoById (state) {
    return state.userList
  }
}
