import { createRouter, createWebHashHistory } from "vue-router";
import LoginIndex from "@/views/Login/LoginIndexView.vue";
import RegisterIndex from "@/views/Register/RegisterIndexView.vue";
import DashboardIndex from "@/views/Dashboard/DashboardIndex.vue";
import TasksIndexView from "@/views/Tasks/TasksIndexView.vue";
import ProjectsndexView from "@/views/Projects/ProjectsndexView.vue";

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
    path: "/projects",
    name: "projects",
    component: ProjectsndexView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardIndex,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksIndexView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
