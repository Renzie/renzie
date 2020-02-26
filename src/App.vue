<template>
  <div id="app" class=" flex flex-col min-h-screen">

    <Header class="" />
    <Hero />
    <Main class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/header/Header.vue'
import Main from './views/Main.vue'
import Footer from './layout/footer/Footer.vue'
import Hero from './views/components/Hero.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer,
    Hero
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}




</style>
