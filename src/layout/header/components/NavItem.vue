<template>
  <li class="object-cover flex-1 items-stretch inline-block hover:text-green-400 align-text-top w-1/4">
    <a href="link" class="bg-local" >
      {{ title }}
    </a>
  </li>
</template>


<script>

  export default {
    name: 'NavItem',
    props: {
      title: String,
      link: String,
      icon: String
    }
  }
</script>
