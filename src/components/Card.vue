<template>
  <div class="lg:w-10/12 mx-auto -mt-32 rounded border-gray-200 shadow bg-gray-100">
    <div class="flex justify-center">

      <div class="w-1/3 profile-image ">
        <img class="rounded-lg transform scale-100 w-40 hover:-translate-y-6 duration-200 shadow" src="@/assets/img/ikke.jpg" alt="Yeah it's me, Renzie Omaña">
      </div>

    <!--  <div class="w-1/3">
        <font-awesome-icon class="fa-10x" :icon="['fas', 'arrow-left']" />
      </div>
-->
      <div class="w-2/3 border-l-2">
        <h1 class="text-4xl tracking-wide">Renzie Omaña</h1>
          <nav class="mt-4 ">
            <ul class="flex justify-center border-b-2">
              <li>
                <a href="#" class="">
                  <font-awesome-icon class="" :icon="['fas', 'arrow-left']" />
                  Me
                </a>
              </li>
              <a href="#" class="">
                <font-awesome-icon class="" :icon="['fas', 'arrow-left']" />
                Career
              </a>
              <li>
                <a href="#" class="">
                  <font-awesome-icon class="" :icon="['fas', 'arrow-left']" />
                  
                </a>
              </li>

              <li>
                <a href="#" class="">
                  <font-awesome-icon class="" :icon="['fas', 'arrow-left']" />
                  Me
                </a>
              </li>

              <li>
                <a href="#" class="">
                  <font-awesome-icon class="" :icon="['fas', 'arrow-left']" />
                  Me
                </a>
              </li>
            </ul>
          </nav>

      </div>








    </div>
</div>
</template>

<script>


  export default {
    name: 'Card'
  }
</script>

<style media="screen">
  #card {
    background-color: #ffffff;
  }
</style>
