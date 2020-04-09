<template>
  <div class="min-h-screen pt-32">
    <main class="container p-4 align-middle lg:pt-16 rounded-sm">
      <h1 class="text-6xl font-bold pb-12">Hobbies</h1>
      <div class="flex justify-around mb-48">
        <div class="w-1/3">
          <img class="shadow rounded-lg" src="@/assets/img/piano.jpg" />
        </div>
        <div class="w-1/2 self-center">
          <h2 class="text-4xl mb-5">Piano</h2>
          <p class="">I'm currently learning how to play the piano and I consider it as my main hobby. I started around 2015 if I remember correctly.</p>
          <p>My focus is mostly on Classical music. However, as I have grown up playing a lot of video games, I also found a lot of interest in the soundtrack of video games.</p>
        </div>
      </div>

      <div class="flex justify-around mb-48">
        <div class="w-1/2 self-center">
          <h2 class="text-4xl mb-5">Travel</h2>
          <p>I haven't been travelling for a long time but having travelled alone made me realize that I was not travelling alone at all!</p>
          <p>Meeting new people has always been a great experience to me.</p>
        </div>
        <div class="w-1/3">
          <img class="shadow rounded-lg" src="@/assets/img/hornli.jpg" />
        </div>
      </div>

      <div class="py-24 flex justify-center">
          <NavItem title="Home" link="/" icon="home" bgColor="bg-green-400" textColor="text-white"/>
          <NavItem title="Career" link="/career" icon="suitcase" bgColor="bg-indigo-400" textColor="text-white"/>
          <NavItem title="Contact" link="/contact" icon="phone" bgColor="bg-green-500" textColor="text-white"/>
      </div>
  </main>
</div>
</template>



<script>

import NavItem from '@/views/components/NavItem.vue';

  export default {
    name: 'Hobbies',
    components: {
      NavItem
    }
  }
</script>
