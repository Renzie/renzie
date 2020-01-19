<template>
  <li>{{ title }}: {{ count }}</li>
</template>

<script>
  export default {
    name: 'Metric',
    props: {
      title: String,
      count: String
    }
  }
</script>
