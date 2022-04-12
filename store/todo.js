export const state = () => ({
  todoList: []
})

export const mutations = {
  addTodo (state, payload) {
    state.todoList.push(payload)
  },
  removeTodo (state, payload) {
    state.todoList.splice(state.todoList.indexOf(payload), 1)
  },
  clearTodo (state) {
    state.todoList = []
  }
}

export const actions = {

}

export const getters = {
  getTodoList: (state) => {
    return state.todoList
  },
  getTodoListCount: (state) => {
    return state.todoList.length
  }
}
