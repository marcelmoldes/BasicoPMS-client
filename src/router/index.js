import { createRouter, createWebHashHistory } from "vue-router";

import LoginIndex from "@/views/Login/LoginIndex.vue";
import RegisterIndex from "@/views/Register/RegisterIndex.vue";
import DashboardIndex from "@/views/Dashboard/DashboardIndex.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: RegisterIndex,
  },
  {
    path: "/login",
    name: "login",
    component: LoginIndex,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardIndex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
