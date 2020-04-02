<template>
    <router-link :to="link">
      <div :class="bgColor" class="w-64 h-48 shadow rounded-sm justify-center flex flex-col text-center group">
        <div>
          <font-awesome-icon :icon="['fas', icon ]" :class="textColor" class="group-hover:-translate-y-3 transform duration-300" size="3x"/>
          <h3 :class="textColor" class="uppercase font-semibold text-3xl
          -z-10 -top-12 relative opacity-0
          transform duration-300 group-hover:z-10 ease-in-out group-hover:top-0  group-hover:opacity-100">{{ title }}</h3>
        </div>
      </div>
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
      textColor: String
    }
  }
</script>
