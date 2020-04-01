import Vue from "vue";
import Router from "vue-router";
import Header from "@/layout/header/Header.vue"
import Home from "@/views/pages/Home.vue"
import About from "@/views/pages/About.vue"
import Hobbies from "@/views/pages/Hobbies.vue"
import Career from "@/views/pages/Career.vue"



Vue.use(Router);

export default new Router ({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Header,
        default: Home
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: Header,
        default: About
      }
    },
    {
      path: "/hobbies",
      name: "hobbies",
      components: {
        header: Header,
        default: Hobbies
      }
    },
    {
      path: "/career",
      name: "career",
      components: {
        header: Header,
        default: Career
      }
    }
  ]
})
