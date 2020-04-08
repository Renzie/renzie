<template>
    <router-link :to="link">
      <transition appear name="hello" :delay="delay">
      <div :class="bgColor" class="w-48 h-48 shadow rounded-full ml-2 justify-center flex flex-col text-center group">
        <div>
          <font-awesome-icon :icon="['fas', icon ]" :class="textColor" class="group-hover:-translate-y-3 relative transform duration-300" size="3x"/>
          <h3 :class="textColor" class="uppercase font-semibold text-3xl
          -z-10 -top-12 relative opacity-0
          transform duration-300 group-hover:z-10 ease-in-out group-hover:top-0  group-hover:opacity-100">{{ title }}</h3>
        </div>
      </div>
        </transition>
    </router-link>

</template>


<script>

  export default {
    name: 'NavItem',
    props: {
      title: String,
      link: String,
      icon: String,
      bgColor: String,
      textColor: String,
      delay: Number
    }
  }
</script>
<style media="screen">
.hello {
	animation: tilt-in-fwd-bl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes tilt-in-fwd-bl {
  0% {
    transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
</style>
