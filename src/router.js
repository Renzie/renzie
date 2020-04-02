import Vue from "vue";
import Router from "vue-router";
import Navigation from "@/layout/navigation/Navigation.vue"
import Home from "@/views/pages/Home.vue"
import About from "@/views/pages/About.vue"
import Hobbies from "@/views/pages/Hobbies.vue"
import Career from "@/views/pages/Career.vue"
import Contact from "@/views/pages/Contact.vue"



Vue.use(Router);

export default new Router ({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        navigation: Navigation,
        default: Home
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        navigation: Navigation,
        default: About
      }
    },
    {
      path: "/hobbies",
      name: "hobbies",
      components: {
        navigation: Navigation,
        default: Hobbies
      }
    },
    {
      path: "/career",
      name: "career",
      components: {
        navigation: Navigation,
        default: Career
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        navigation: Navigation,
        default: Contact
      }
    }
  ]
})
