<template>
  <div class="lg:w-10/12 mx-auto -mt-32 rounded border-gray-200 shadow bg-gray-100">
    <div class="flex justify-center">

      <div class="w-1/4 profile-image ">
        <img class="rounded-lg transform scale-100 w-40 hover:-translate-y-6 duration-200 shadow mx-auto mt-auto" src="@/assets/img/ikke.jpg" alt="Yeah it's me, Renzie Omaña" />
        <h1 class="text-4xl tracking-wide">Renzie Omaña</h1>
      </div>
      <div class="w-3/4 border-l-2">

          <nav class="mt-4 ">
            <ul class="flex justify-around border-b-2">
              <Tab
              v-for="tab in tabs"
              :key="tab.title"
              :icon="tab.icon"
              :title="tab.title"
              v-on:click.native="currentTab = tab"/>
            </ul>
          </nav>
          <TabInfo :is="currentTab.component">
          </TabInfo>
      </div>
    </div>
</div>
</template>

<script>
import Tab from './Tab.vue';
import TabInfo from './TabInfo.vue';
import About from './Tabs/About.vue';
import Hobbies from './Tabs/Hobbies.vue';
import Career from'./Tabs/Career.vue';

var tabs = [
  {
    component: About,
    title: "About",
    icon: "user-circle"
  },
  {
    component: Hobbies,
    title: "Hobbies",
    icon: "music"
  },
  {
    component: Career,
    title: "Career",
    icon: "suitcase"
  }
]

  export default {
    name: 'Card',
    components: {
      Tab,
      TabInfo,
      About,
      Hobbies,
      Career
    },
    data : () => {
      return {
        tabs: tabs,
        currentTab: tabs[0]
      }
    },
    computed: {
    }
  }
</script>

<style media="screen">
  #card {
    background-color: #ffffff;
  }
</style>
