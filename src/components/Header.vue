<template>
<header class="flex justify-between bg-gray-200">
  <nav>
    <NavItem title="Home" />
    <NavItem title="Career" />
    <Logo img="./../assets/img/ikke.png" />
    <NavItem title="Hobbies" />
    e
    <NavItem title="Contact" />
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
