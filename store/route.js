export const state = () => ({
  items: []
})

export const mutations = {
  addItem: (state, item) => {
    state.items.push(item)
  },
  addItems: (state, items) => {
    console.log(items, 'addItems')
    state.items.push(...items)
  }
}

export const getters = {
  getItems: (state) => {
    return state.items
  }
}
