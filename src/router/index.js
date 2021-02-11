import { createRouter, createWebHistory } from "vue-router";
import appHeader from "@/components/appHeader";
import sideBar from "@/components/sideBar";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import("../views/Home.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/percentage",
    name: "Percentage",
    components: {
      default: () => import("../views/Percentage.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/month",
    name: "Month",
    components: {
      default: () => import("../views/Month.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/year",
    name: "Year",
    components: {
      default: () => import("../views/Year.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/details",
    name: "Details",
    components: {
      default: () => import("../views/Details.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/setting",
    name: "Setting",
    components: {
      default: () => import("../views/Setting.vue"),
      appHeader,
      sideBar
    }
  },
  {
    path: "/about",
    name: "About",
    components: {
      default: () => import("../views/About.vue")
    }
  },
  {
    path: "/reset",
    name: "Reset",
    components: {
      default: () => import("../views/Reset.vue")
    }
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../views/Login.vue")
    }
  },
  {
    path: "/register",
    name: "Register",
    components: {
      default: () => import("../views/Register.vue")
    }
  },
  {
    path: "/newbill",
    name: "AddNewBill",
    component: () => import("../views/AddNewBill.vue")
  },
  {
    path: "/newcategory",
    name: "AddNewCategory",
    component: () => import("../views/AddNewCategory.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
