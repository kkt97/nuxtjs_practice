<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped>

</style>
