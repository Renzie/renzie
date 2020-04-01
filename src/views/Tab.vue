<template>
  <li class="font-display" :class="[currentPage == link ? activeClass : '', 'font-display']">
    <router-link :to="link" >

        <font-awesome-icon class="icon inline-block" size="lg" :icon="['fas', icon]" />
      <!--<span>{{ title }}</span> -->
    </router-link>


  </li>
</template>

<script>

  export default {
    name: "Tab",
    props: {
      icon: String,
      title: String,//TODO change to tooltip
      link: String
    },
    computed: {
      currentPage() {
        return this.$route.path;
      }
    },
    data() {
      return {
        activeClass: 'currentTab'
      }
    }
  }
</script>

<style>
.tabs li a {
  font-weight: normal;
  font-variant: normal;
  font-size: 1.3em;
  line-height: 1;
  -webkit-backface-visibility: hidden;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.tabs li:hover, .tabs li:focus {
  color: #74777b;
}

.tabs li {
  color: #2CC185;
}

.tabs li.currentTab {
  color: #fff;
  background: #2CC185;
  z-index: 100;
}

.tabs nav ul li a::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: calc(100% + 1px);
  border: 1px solid #2CC185;
  background: #2CC185;
  content: '';
  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}


.tabs nav ul li.currentTab a:hover {
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.tabs nav ul li a span,
.tabs nav ul li .icon {
  height: 100%;
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
	-webkit-transform: translate3d(-5px,0,0);
	transform: translate3d(-5px,0,0);
}


.tabs nav ul li.currentTab a span,
.tabs nav ul li.currentTab .icon {
	-webkit-transform: translate3d(-10px,0,0);
	transform: translate3d(-10px,0,0);
}

.tabs nav ul li.currentTab a {
	color: #fff;
}


</style>
