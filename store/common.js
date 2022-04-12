export const state = () => ({
  loading: false
})

export const mutations = {
  loading (state, value) {
    state.loading = value
  }
}

export const getters = {
  getItems: (state) => {
    return state.loading
  }
}
