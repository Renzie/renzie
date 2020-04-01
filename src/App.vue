<template>
  <div id="app" class="flex flex-col min-h-screen">

    <router-view name="navigation"></router-view>
    <main>
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
