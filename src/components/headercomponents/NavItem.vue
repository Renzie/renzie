<template>
  <li class="block flex-1 mr-1 lg:inline-block mt-4 lg:w-24 hover:text-orange-400 mb-4"><a href="link">{{ title }}</a></li>
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
