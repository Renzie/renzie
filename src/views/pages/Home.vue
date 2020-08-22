<template>
  <div class="min-h-screen w-auto pt-32">
    <main class="container align-middle lg:pt-16 rounded-sm">
      <div class="h-screen">
        <div class="w-3/4">
          <Intro />
        </div>
      </div>
      <AboutThumbnail/>

      <div class="flex justify-between mb-56">
        <div class="w-1/3 bg-white self-start rounded-lg">
          <div class="ml-5 self-center rounded-l-lg pb-4">
            <font-awesome-icon :icon="['fas', 'code-branch' ]" class="text-indigo-500" size="4x"/>
          </div>
          <div class="">
            <h3 class="text-3xl mb-5">Full Stack Developer</h3>
            <p class="text-lg">You can find more about my experience in my Career page</p>
          </div>
        </div>

          <div class="w-1/3 bg-white self-start rounded-lg">
            <div class="ml-5 rounded-l-lg pb-4">
              <font-awesome-icon :icon="['fas', 'music' ]" class="text-teal-400" size="4x"/>
            </div>
            <div class="">
              <h3 class="text-3xl mb-5">Pianist</h3>
              <p class="text-lg">You find more about my interests in my Hobbies page!</p>
            </div>
          </div>
        </div>

        <div class="py-24 flex justify-center">
            <NavItem title="Hobbies" link="/hobbies" icon="music" bgColor="bg-teal-400" textColor="text-white"/>
            <NavItem title="Career" link="/career" icon="suitcase" bgColor="bg-indigo-400" textColor="text-white"/>
            <NavItem title="Contact" link="/contact" icon="phone" bgColor="bg-green-500" textColor="text-white"/>
        </div>


    </main>
  </div>
</template>


<script>
  import Intro from '@/views/components/Intro.vue';
  import NavItem from '@/views/components/NavItem.vue';
  import AboutThumbnail from '@/views/components/AboutThumbnail.vue';

  export default {
    name: 'Home',

    components: {
      Intro,
      NavItem,
      AboutThumbnail
    }
  }
</script>
