import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "./middleware";

const loadView = (path: string) => () =>
  import(/* webpackChunkName: "view-[request]" */ `@/views/${path}.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accounts",
    component: loadView("Accounts"),
    children: [
      {
        path: "login",
        name: "login",
        component: loadView("Login"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: loadView("About"),
    beforeEnter: auth,
  },
  {
    path: "/",
    name: "App",
    component: loadView("App"),
    beforeEnter: auth,
    children: [
      {
        path: "home",
        name: "home",
        component: loadView("Home"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: loadView("NotFound"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
