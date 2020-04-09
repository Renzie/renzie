<template>
  <div class="h-full min-h-screen pt-32">
    <main class="container p-4 align-middle lg:pt-16 bg-white rounded-sm">
      <h1 class="text-6xl font-bold mb-20 ">Contact</h1>

      <font-awesome-icon :icon="['fab', 'linkedin' ]" class="group-hover:-translate-y-3 relative transform duration-300 text-blue-600" size="6x"/>
      <font-awesome-icon :icon="['fab', 'github' ]" class="group-hover:-translate-y-3 relative transform duration-300 text-black" size="6x"/>


      <div class="py-24 flex justify-center">
        <NavItem title="Home" link="/" icon="home" bgColor="bg-purple-500" textColor="text-white"/>
          <NavItem title="Hobbies" link="/hobbies" icon="music" bgColor="bg-teal-400" textColor="text-white"/>
          <NavItem title="Career" link="/career" icon="suitcase" bgColor="bg-indigo-400" textColor="text-white"/>
      </div>
    </main>
  </div>

</template>


<script>

import NavItem from '@/views/components/NavItem.vue';

  export default {
    name: 'Contact',
    components: {
      NavItem
    }
  }
</script>
