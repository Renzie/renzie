<template>
  <div class="section-shaped">
    <div class="shape transform -skew-y-6">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Hero"
  }
</script>

<style>
  .section-shaped {
    height: 500px;
    background-size: cover;
    background-position: 50%;

    position: relative;
  }

  .shape {
    background : linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%);


    transform-origin: 0;
  }

  .section-shaped .shape {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
</style>
