<template>
  <div class="lg:min-h-full fixed bg-gray-800 lg:w-20 sm:w-full sm:h-24 block">
    <div class="tabs absolute left-0 w-full">
      <nav class="text-center">
        <ul class="flex flex-col">
          <Tab
          v-for="tab in tabs"
          :key="tab.title"
          :icon="tab.icon"
          :title="tab.title"
          :link="tab.link"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
import Tab from '@/views/Tab.vue';
import Hobbies from '@/views/Tabs/Hobbies.vue';
import Career from'@/views/Tabs/Career.vue';
import Home from'@/views/Tabs/Home.vue';


var tabs = [Home, Hobbies, Career]

export default {
  name: 'Navigation',
  components: {
    Tab,
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
