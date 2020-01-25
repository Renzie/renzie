<template>
  <li class="block flex-1 mr-1 inline-block mt-4 w-24">
    <div id="logo">
      <img class="" :src="require('@/assets/img/' + img)" v-bind:alt="Renzie" />
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
