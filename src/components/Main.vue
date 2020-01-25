<template>
  <main class="lg:pt-28 pt-24 w-full relative">
    <section class="">

      <p class="uppercase">Hello</p>

      <ul class="flex-row">
        <Metric title="# Times I realized something stupid this year" count="23" />
        <Metric title="# Plants that died in my appartment" count="4" />
        <Metric title="Euh I don't remember what I wanted to write here" count="1096" />

      </ul>
    </section>
  </main>
</template>


<script>
import Metric from './maincomponents/Metric.vue'


  export default {
    name: 'Main',
    components: {
      Metric
    }
  }
</script>
