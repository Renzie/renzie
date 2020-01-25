<template>
<header class="flex justify-between fixed top-0 inset-x-0 z-50 h-16 items-center  border-b h-auto">
  <nav class="w-full relative mx-auto">
    <ul>
      <NavItem title="Home" />
      <NavItem title="Career" />

      <Logo img="ikke.png" />

      <NavItem title="Hobbies" />
      <NavItem title="Contact" />
    </ul>

  </nav>
</header>

</template>


<script>

import NavItem from './headercomponents/NavItem.vue'
import Logo from './headercomponents/Logo.vue'

export default {
  name: 'Header',
  components: {
    NavItem,
    Logo
  }
}

</script>
