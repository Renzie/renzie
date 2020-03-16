<template>
  <li class=""> <!-- todo full hover -->
      <font-awesome-icon class="" :icon="['fas', icon]" />
      {{ title }}
  </li>
</template>

<script>

  export default {
    name: "Tab",
    props: {
      icon: String,
      title: String,  //TODO change to tooltip
    }
  }
</script>
