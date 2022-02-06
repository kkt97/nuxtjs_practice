<template>
  <v-app>
    <common-loading v-if="loading"></common-loading>
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
import CommonLoading from '@/components/common/CommonLoading'

export default {
  name: 'DefaultLayout',
  components: {
    CommonNavigation,
    CommonFooter,
    CommonLoading
  },
  data () {
    return {
      title: 'Nuxt Training'
    }
  },
  computed: {
    loading() {
      return this.$store.state.common.loading
    }
  }
}
</script>
