<template>
  <div id="app" class=" flex flex-col min-h-screen">
    <div class="bg w-full h-full absolute"></div>
    <Header class="" />
    <Main class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

.bg {
  background: url('./assets/img/background3.jpg');
  background-size: cover;
  z-index: -1;
}


</style>
