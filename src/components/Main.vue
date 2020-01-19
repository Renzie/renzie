<template>
  <main class="">
    <section class="bg-blue-100">
      <Card />
      <ul class="flex-row">
        <Metric title="# Times I realized something stupid this year" count="23" />
        <Metric title="# Plants that died in my appartment" count="4" />
        <Metric title="Euh I don't remember what I wanted to write here" count="1096" />

      </ul>
    </section>
  </main>
</template>


<script>
import Card from './maincomponents/Card.vue'
import Metric from './maincomponents/Metric.vue'


  export default {
    name: 'Main',
    components: {
      Card,
      Metric
    }
  }
</script>
