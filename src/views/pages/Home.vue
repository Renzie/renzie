<template>
  <div class="min-h-screen pt-32">
    <main class="container align-middle lg:pt-16 rounded-sm">
      <div class="flex  h-screen">
        <div class="w-3/4">
          <transition appear name="hello">
            <h1 class="text-6xl font-extrabold align-middle text-left subpixel-antialiased">Hey! My name is Renzie, is there any way I can help?</h1>
          </transition>
          <transition appear mode="out-in" name="canihelp">
          <h1 class="text-5xl text-gray-900 align-middle text-center subpixel-antialiased">

          </h1>
        </transition>
        </div>
      </div>

      <div class="flex justify-around mb-64  rounded-lg">
        <div class="w-1/5 px-3">
          <img class="rounded-full" src="@/assets/img/ikke.jpg" alt="">
        </div>
        <div class="pl-10 w-3/5 text-justify">
          <h5 class="text-3xl">I'm a software engineer based in Ghent, Belgium. I enjoy gaining experience in life by exploring new things, places and meet new people!</h5>
        </div>
      </div>


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

        <!--<div class="pt-5 flex justify-center">
            <NavItem delay=500 title="About" link="/about" icon="mug-hot" bgColor="bg-purple-900" textColor="text-orange-500"/>
            <NavItem title="Hobbies" link="/hobbies" icon="music" bgColor="bg-yellow-500" textColor="text-purple-900"/>
            <NavItem title="Career" link="/career" icon="suitcase" bgColor="bg-blue-400" textColor="text-white"/>
            <NavItem title="Contact" link="/contact" icon="phone" bgColor="bg-green-500" textColor="text-purple-900"/>
        </div> -->
    </main>
  </div>
</template>


<script>


  export default {
    name: 'Home',

    components: {

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
