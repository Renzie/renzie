<template>
  <main class="container mx-auto lg:pt-28 pt-32 w-full relative -mt-64">
    <section class="">
      <Card />

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
import Card from './maincomponents/Card.vue'


  export default {
    name: 'Main',
    components: {
      Metric,
      Card
    }
  }
</script>
