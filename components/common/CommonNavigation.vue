<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <img src="~/assets/images/jtkim2.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>jtkim's Nuxt study</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
import { routes } from '@/consts/route.js'

export default {
  name: 'CommonNavigation',
  data () {
    return {
      items: [],
      drawer: false,
      clipped: false
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  beforeMount () {
    this.$store.commit('route/addItems', routes.data)
    this.items = routes.data
  }
}
</script>

<style scoped>

</style>
