<template>
<header class="duration-500 ease-linear absolute top-0 w-full z-50">
  <div class="container mx-auto mt-2 py-8 ">


  <!--<Logo img="logo.png" class="w-1/5" /> -->
  <div class="tabs  ml-auto">
      <nav class="text-center">
        <ul class="flex flex-wrap">
          <Tab
          class="last:border-0 border-r-2 border-green-300"
          :class="{currentTab:tab == currentTab}"
          v-for="tab in tabs"
          :key="tab.title"
          :icon="tab.icon"
          :title="tab.title"
          v-on:click.native="currentTab = tab"/>
        </ul>
      </nav>
      <transition name="fade">
      <TabInfo :is="currentTab" class="tabInfo">
      </TabInfo>
    </transition>
  </div>
    </div>
</header>

</template>


<script>

//import NavItem from './components/NavItem.vue'


import Tab from '@/views/Tab.vue';
import TabInfo from '@/views/TabInfo.vue';
import About from '@/views/Tabs/About.vue';
import Hobbies from '@/views/Tabs/Hobbies.vue';
import Career from'@/views/Tabs/Career.vue';
import Home from'@/views/Tabs/Home.vue';


var tabs = [Home, About, Hobbies, Career]

export default {
  name: 'Header',
  components: {
    Tab,
    TabInfo,
    About, Hobbies, Career
  },

data : () => {
  return {
    tabs: tabs,
    currentTab: tabs[0]
  }
}
}

</script>

<style media="screen">

.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.tabs {
font-weight: 300;
font-size: 1.25em;
}

.tabs nav ul li a {
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.tabs nav a {
	position: relative;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 2.5;
}

.tabs nav a span {
	vertical-align: middle;
	font-size: 0.75em;
}

.tabs nav ul {
	max-width: 600px;
}

.tabs nav ul li {
	position: relative;
  color: #2CC185;
}

</style>
