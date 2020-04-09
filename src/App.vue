<template>
  <div id="app" class="font-sans text-gray-800">
    <main class="min-h-screen">
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
