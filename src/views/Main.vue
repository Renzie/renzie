<template>
  <main class="container mx-auto lg:pt-28 pt-32 w-full relative -mt-64">
    <section class="">
      <Card />
    </section>
  </main>
</template>


<script>
import Card from '@/components/Card.vue'


  export default {
    name: 'Main',
    components: {
      Card
    }
  }
</script>
