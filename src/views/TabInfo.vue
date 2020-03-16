<template>

  <section class="content-center w-2/3 mx-auto">

    <slot></slot>

  </section>
</template>

<script>
  export default {
    name: "TabInfo",
    props: {
      title: String,
      content: String // is there an easier way?
    },
    data() {
      return {
      }
    }
  }
</script>
