<template>
  <div class="min-h-screen bg-indigo-900">
    <main class="container shadow p-4 align-middle lg:pt-16 bg-white rounded-sm">
      <h1 class="text-6xl text-gray-900 align-middle text-center subpixel-antialiased">Hey!</h1>
      <h1 class="text-5xl text-gray-900 align-middle text-center subpixel-antialiased">My name is Renzie, is there any way I can help?</h1>
      <div class="pt-5 flex justify-center">

          <NavItem title="About" link="/about" icon="mug-hot" bgColor="bg-purple-900" textColor="text-orange-500"/>
          <NavItem class="" title="Hobbies" link="/hobbies" icon="music" bgColor="bg-yellow-500" textColor="text-purple-900"/>


          <NavItem title="Career" link="/career" icon="suitcase" bgColor="bg-blue-400" textColor="text-white"/>
          <NavItem title="Contact" link="/contact" icon="phone" bgColor="bg-green-500" textColor="text-purple-900"/>



      </div>
    </main>
  </div>

</template>


<script>

import NavItem from '@/views/components/NavItem.vue';

  export default {
    name: 'Home',
    components: {
      NavItem
    }
  }
</script>
