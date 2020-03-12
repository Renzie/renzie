<template>
<header class="duration-500 ease-linear absolute top-0 w-full z-50">
  <div class="container mx-auto mt-2 py-8 ">


  <!--<Logo img="logo.png" class="w-1/5" /> -->
    <ul class="flex">

      <div class="w-2/5 ml-auto">
        <NavItem title="Home" icon="home" />
        <NavItem title="Career" icon="briefcase" />
        <NavItem title="Hobbies" icon="music" />
        <NavItem title="Contact" icon="comment"/>
      </div>

    </ul>
    </div>
</header>

</template>


<script>

import NavItem from './components/NavItem.vue'

export default {
  name: 'Header',
  components: {
    NavItem
  }
}

</script>
