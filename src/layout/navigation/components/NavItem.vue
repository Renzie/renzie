<template>
  <li class="nav-item object-cover flex-1 items-stretch inline-block text-blue-700 duration-200 hover:text-green-300 align-text-top w-1/4">
    <a href="link" class="nav-text " >
      <h3 class="uppercase">{{ title }}</h3>

      <font-awesome-icon class="invisible" :icon="['fas', icon ]" />
    </a>
  </li>
</template>


<script>

  export default {
    name: 'NavItem',
    props: {
      title: String,
      link: String,
      icon: String
    }
  }
</script>

<style>

.nav-item:hover font-awesome-icon {
  visibility: visible;
}

.nav-text {

}

</style>
