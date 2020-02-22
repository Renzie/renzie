<template>
  <li class=" object-cover  inline-block flex-1">
    <div id="logo">
      <a href="#">
        <img :src="require('@/assets/img/' + img)" v-bind:alt="icon" />
      </a>

    </div>
  </li>

</template>

<script>
  export default {
    methods: {
      getImgUrl(source) {
        return require('../../' + source)
      }
    },
    props : ['img'],
    name: 'Logo'
  }
</script>
