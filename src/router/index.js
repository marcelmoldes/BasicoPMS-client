import { createRouter, createWebHashHistory } from "vue-router";
import LoginIndex from "@/views/Login/LoginIndexView.vue";
import RegisterIndex from "@/views/Register/RegisterIndexView.vue";
import DashboardIndex from "@/views/Dashboard/DashboardIndex.vue";
import TasksIndexView from "@/views/Tasks/TasksIndexView.vue";
import ProjectsIndexView from "@/views/Projects/ProjectsIndexView.vue";
import TeamIndexView from "@/views/Team/TeamIndexView.vue";
import TaskDetailsView from "@/views/Tasks/TaskDetailsView.vue";

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
  {
    path: "/tasks/:id",
    name: "task",
    component: TaskDetailsView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksIndexView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsIndexView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamIndexView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
