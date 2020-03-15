<template>
  <div class="lg:w-10/12 mx-auto -mt-32 rounded border-gray-200 shadow bg-gray-100">
    <div class="flex justify-center">

      <div class="w-1/4 profile-image ">
        <img class="rounded-lg transform scale-100 w-40 hover:-translate-y-6 duration-200 shadow mx-auto mt-auto" src="@/assets/img/ikke.jpg" alt="Yeah it's me, Renzie Omaña" />
        <h1 class="text-4xl tracking-wide">Renzie Omaña</h1>
      </div>

    <!--  <div class="w-1/3">
        <font-awesome-icon class="fa-10x" :icon="['fas', 'arrow-left']" />
      </div>
-->
      <div class="w-3/4 border-l-2">

          <nav class="mt-4 ">
            <ul class="flex justify-around border-b-2">
              <Tab
                title="Me"
                icon="user-circle" />
              <Tab
                title="Career"
                icon="suitcase" />
              <Tab
                title="Hobbies"
                icon="music" />
              <Tab
               title="Personal Development"
               icon="star" />
            </ul>
          </nav>
          <section class="content-center w-2/3 mx-auto">
            <p>I’m that annoying guy who likes to start talking to you on a train or something. Uhh. Yeah. </p>

<p>The biggest reason I’m doing this is because it’s both fun and it feels that the you reach your destination way faster than when you’re actually just waiting and scrolling through your phone.

I’m also a software engineer and I love how people design and share their own experiences. </p>
          </section>
      </div>








    </div>
</div>
</template>

<script>
import Tab from './Tab.vue';


  export default {
    name: 'Card',
    components: {
      Tab
    }
  }
</script>

<style media="screen">
  #card {
    background-color: #ffffff;
  }
</style>
