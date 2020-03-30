<template>

  <div class="content-center w-2/3 mx-auto">

    <slot></slot>

  </div>
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

<style media="screen">
  .tabInfo {
    transition: transform 0.3;
    transform: rotate(90%);
  }
</style>
