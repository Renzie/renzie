<template>
  <div id="app" class=" flex flex-col min-h-screen">

    <Header class="" />
    <Hero />
    <Main class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'

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
