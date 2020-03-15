<template>
  <li class=""> <!-- todo full hover -->
    <a href="#" class="">
      <font-awesome-icon class="" :icon="['fas', icon]" />
      {{ title }}
    </a>
  </li>
</template>

<script>

  export default {
    name: "Tab",
    props: {
      icon: String,
      title: String,  //TODO change to tooltip
      content: String
    }
  }
</script>
