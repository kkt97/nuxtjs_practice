export default function ({ $axios, store }) {
  // set BaseUrl
  switch (process.env.NUXT_APP_TYPE) {
    case 'test':
      $axios.setBaseURL(process.env.NUXT_TEST_APP_API_URL)
      break
    case 'local':
      $axios.setBaseURL(process.env.NUXT_LOCAL_APP_API_URL)
      break
    case 'product':
    default :
      $axios.setBaseURL(process.env.NUXT_PRODUCT_APP_API_URL)
      break
  }

  // axios hooks
  $axios.onRequest((config) => {
    store.commit('common/loading', true)
  })

  $axios.onResponse((config) => {
    store.commit('common/loading', false)
    $axios.setHeader('Access-Control-Allow-Origin', 'YOUR API URL')
  })

  // $axios.onError(err)
  // $axios.onRequestError(err)
  // $axios.onResponseError(err)

  // set Header
  // $axios.setHeader("Authorization", "123");

  // set Token
  // $axios.setToken("123", "Bearer");
}
