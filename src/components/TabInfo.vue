<template>
  <component :is="currentTab" />
</template>

<script>
  export default {
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
