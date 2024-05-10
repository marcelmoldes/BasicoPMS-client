import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginIndex from "@/views/Login/LoginIndex.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginIndex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
