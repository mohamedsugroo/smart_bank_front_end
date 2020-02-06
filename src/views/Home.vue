<template>
  <div class="home">
    <Slider />
  </div>
</template>

<script>
import Slider from './comps/home_page/jump'
export default {

  name: 'home',
  components: {
    Slider
  }
}
</script>

<style scoped>
  .bg-dark {
    background: #000 !important ;
  }
</style>
