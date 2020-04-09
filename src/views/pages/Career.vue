<template>
  <div class="min-h-screen pt-32">
      <main class="container p-4 align-middle rounded-sm lg:pt-16">
        <div class="">
          <h1 class="text-6xl font-bold mb-20 ">Career</h1>

          <h2 class="text-4xl font-semibold mb-12">Working experience</h2>
          <div class="flex justify-between mb-48">
            <div class="w-1/3">
              <img class="shadow rounded-lg" src="@/assets/img/tomtom.jpg" />
            </div>
            <div class="w-1/2 self-center">
              <h3 class="text-4xl mb-5">TomTom</h3>
              <h4 class="text-2xl">Associate Software Engineer</h4>
              <h5 class="text-xl">October 2018 - October 2019</h5>
              <p>Rewrite the creation of the product that is responsible for the data within the GPS systems.</p>
            </div>
          </div>

          <div class="flex justify-between mb-48">
            <div class="w-1/2 self-center">
              <h3 class="text-4xl mb-5">Blackboard</h3>
              <h4 class="text-2xl">Full Stack Developer (Intern)</h4>
              <h5 class="text-xl">February 2018 - June 2018</h5>
              <p>Fix bugs / add new features to the learning platform that schools use.</p>
            </div>
            <div class="w-1/3">
              <img class="shadow rounded-lg" src="@/assets/img/tomtom.jpg" />
            </div>
          </div>
        </div>
        <div class="">
          <h2 class="text-4xl font-semibold mb-12">Education</h2>
          <div class="flex justify-between mb-48">
          <div class="mr-5 w-1/3">
              <img class="rounded-lg" src="@/assets/img/hackaton_howest.jpg" alt="">
          </div>
          <div class="w-1/2 self-center">
            <h3 class="text-4xl mb-5">Howest</h3>
            <h4 class="text-2xl">College</h4>
            <h5 class="text-xl">2015 - 2018</h5>
            <p>Exposition of many paths you can take within technology.</p>
          </div>
        </div>
        </div>
        <div class="py-24 flex justify-center">
          <NavItem title="Home" link="/" icon="home" bgColor="bg-purple-500" textColor="text-white"/>
          <NavItem title="Hobbies" link="/hobbies" icon="music" bgColor="bg-teal-400" textColor="text-white"/>
          <NavItem title="Contact" link="/contact" icon="phone" bgColor="bg-green-500" textColor="text-white"/>
        </div>
      </main>
</div>
</template>


<script>

import NavItem from '@/views/components/NavItem.vue';

  export default {
    name: 'Career',
    components: {
      NavItem
    }
  }
</script>
