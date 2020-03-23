<template>
  <li class="w-full cursor-pointer hover:bg-green-600 font-display flex-1 border-r-2 last:border-r-0 transition duration-500 border-green">
    <a class="py-8"><span>{{ title }}</span></a>
      <font-awesome-icon class="" :icon="['fas', icon]" />

  </li>
</template>

<script>

  export default {
    name: "Tab",
    props: {
      icon: String,
      title: String,  //TODO change to tooltip
    }
  }
</script>

<style>
a {
  z-index: 10;
  display: inline-block;
  margin: 0 0.4em 0 0;
  vertical-align: middle;
  text-transform: none;
  font-weight: normal;
  font-variant: normal;
  font-size: 1.3em;
  line-height: 1;
  -webkit-backface-visibility: hidden;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #74777b;
}

.currentTab {
  color: #fff;
  background: #2CC185;
  z-index: 100;
}

a::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  height: calc(100% + 1px);
  border: 1px solid #2CC185;
  background: #2CC185;
  content: '';
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
}


.currentTab li a::after {
  position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	height: calc(100% + 1px);
	border: 1px solid #2CC185;
	background: #2CC185;
	content: '';
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
</style>
