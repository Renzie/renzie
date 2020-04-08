<template>
  <div class="min-h-screen pt-32">
    <main class="container shadow p-4 align-middle lg:pt-16 rounded-sm" >
      <div class="flex justify-center">
        <div class="w-3/4">
          <transition appear name="hello">
            <h1 class="text-6xl text-gray-900 align-middle text-center subpixel-antialiased">Hey!</h1>
          </transition>
          <transition appear mode="out-in" name="canihelp">
          <h1 class="text-5xl text-gray-900 align-middle text-center subpixel-antialiased">
            My name is Renzie, is there any way I can help?
          </h1>
        </transition>
        </div>
      </div>

      <div class="pt-5 flex justify-center">
          <NavItem delay=500 title="About" link="/about" icon="mug-hot" bgColor="bg-purple-900" textColor="text-orange-500"/>
          <NavItem title="Hobbies" link="/hobbies" icon="music" bgColor="bg-yellow-500" textColor="text-purple-900"/>
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


<style media="screen">

.slide-in-bck-tl {
	animation: slide-in-bck-tl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-bck-tl {
  0% {
    transform: translateZ(700px) translateY(-300px) translateX(-400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateY(0) translateX(0);
    opacity: 1;
  }
}
.hello-enter-active, .hello-leave-active {
	animation: slide-in-bck-tl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.hello-enter, .hello-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0;
}

.canihelp-enter-active, .canihelp-leave-active {
  transition: opacity 10s
}

.canihelp-enter, .canihelp-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0;
}

</style>
