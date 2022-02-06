export const state = () => ({
  items: []
})

export const mutations = {
  addItem: (state, item) => {
    state.items.push(item)
  },
  addItems: (state, items) => {
    state.items.push(...items)
  }
}

export const getters = {
  getItems: (state) => {
    return state.items
  }
}
