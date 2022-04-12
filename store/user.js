export const state = () => ({
  userList: []
})

export const mutations = {
  setUsers (state, payload) {
    state.userList = payload
  },
  upTodo (state, payload) {
    console.log('1')
    Object.assign(state.userList, payload)
    console.log(payload)
  }
}

export const actions = {
}

export const getters = {
  getTodoById (state) {
    console.log(state.userList)
    return state.userList
  }
}
