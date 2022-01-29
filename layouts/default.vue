<template>
  <v-app>
    <common-navigation
      :title="title"
    />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <common-footer></common-footer>

  </v-app>
</template>

<script>
import CommonNavigation from '@/components/common/CommonNavigation'
import CommonFooter from '@/components/common/CommonFooter'

export default {
  name: 'DefaultLayout',
  components: {
    CommonNavigation,
    CommonFooter
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
