<template>
  <div id="app">
    <main class="min-h-screen font-sans text-gray-800 w-screen sm:mx-0 flex flex-col">
      <router-view name="navigation"></router-view>
      <router-view name="header"></router-view>

          <fade-transition origin="center" mode="out-in" :duration="250">
              <router-view/>
          </fade-transition>
      </main>
  </div>
</template>

<script>

import { FadeTransition } from "vue2-transitions";

export default {
  name: 'app',
  components: {
    FadeTransition
  }
}
</script>
