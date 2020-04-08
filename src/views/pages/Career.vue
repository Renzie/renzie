<template>
  <div class="malibu-beach min-h-screen pt-32">
    <div class="flex container justify-around ">
      <div class="mr-5 w-1/3">
          <img class="rounded-lg" src="@/assets/img/hackaton_howest.jpg" alt="">
      </div>
      <main class="shadow p-4 align-middle lg:pt-16 bg-white rounded-sm w-2/3">
        <h1 class="text-4xl text-center">Career</h1>
        <div class="mb-5">
          <h2 class="text-3xl">Work</h2>
          <article class=""><!-- TODO Add location -->

            <h3 class="text-2xl">TomTom - Associate Software Engineer</h3>
            <p>Rewrite the creation of the product that is responsible for the data within the GPS systems.</p>
            <p></p>
          </article>

          <article class="">
            <h3 class="text-2xl">Blackboard - Intern Full-Stack Developer</h3>
            <p>Fix bugs / add new features to the learning platform that schools use.</p>
          </article>
        </div>

        <div class="">
          <h2 class="text-3xl">Education</h2>
          <article class="">
            <h3 class="text-2xl">Howest</h3>
          </article>
        </div>
      </main>
    </div>

</div>
</template>


<script>
  export default {
    name: 'Career',
    components: {

    }
  }
</script>
