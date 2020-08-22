<template>
  <div>
    <transition appear name="hello">
      <h1 class="text-6xl font-extrabold align-middle text-left subpixel-antialiased mb-64">Hey! My name is Renzie. I know how coding works.  </h1>
    </transition>

    <a href="#">
      <transition appear mode="out-in" name="canihelp">
        <h1 class="text-5xl subpixel-antialiased text-center">
          <font-awesome-icon :icon="['fas', 'chevron-down' ]" class="group-hover:-translate-y-3 relative transform duration-300" size="2x"/>
        </h1>
      </transition>
    </a>
  </div>

</template>

<script>
  export default {
    name: "Intro"
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
