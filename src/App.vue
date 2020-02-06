<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
