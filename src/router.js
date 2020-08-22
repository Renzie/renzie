import Vue from "vue";
import Router from "vue-router";
import Navigation from "@/layout/navigation/Navigation.vue"
import Header from "@/layout/header/Header.vue"
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
        default: Home,
        header: Header
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        navigation: Navigation,
        default: About,
        header: Header
      }
    },
    {
      path: "/hobbies",
      name: "hobbies",
      components: {
        navigation: Navigation,
        default: Hobbies,
        header: Header
      }
    },
    {
      path: "/career",
      name: "career",
      components: {
        navigation: Navigation,
        default: Career,
        header: Header
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        navigation: Navigation,
        default: Contact,
        header: Header
      }
    }
  ]
})
