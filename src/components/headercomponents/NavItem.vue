<template>
  <li class="flex-1 mr-1 lg:inline-block lg:w-24 hover:text-orange-400 shadow"><a href="link">{{ title }}</a></li>
</template>


<script>

  export default {
    name: 'NavItem',
    props: {
      title: String,
      link: String,
      image: String
    }
  }
</script>
