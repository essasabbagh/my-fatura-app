import { createRouter, createWebHistory } from "vue-router";
import appHeader from "@/components/appHeader";
import sideBar from "@/components/sideBar";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import("../views/Home.vue"),
      appHeader,sideBar
    }
  },
  {
    path: "/test",
    name: "Test",
    components: {
      default: () => import("../views/test.vue"),
      sideBar
    }
  },
  {
    path: "/about",
    name: "About",
    components: {
      default: () => import("../views/About.vue"),
      appHeader
      
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/new",
    name: "AddNew",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddNew.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
