import { createRouter, createWebHashHistory } from "vue-router";
import LoginIndex from "@/views/Login/LoginIndexView.vue";
import RegisterIndex from "@/views/Register/RegisterIndexView.vue";
import DashboardIndex from "@/views/Dashboard/DashboardIndex.vue";
import TasksIndexView from "@/views/Tasks/TasksIndexView.vue";
import ProjectsIndexView from "@/views/Projects/ProjectsIndexView.vue";
import TeamIndexView from "@/views/Users/UserIndexView.vue";
import PersonalAccountIndexView from "@/views/PersonalAccount/PersonalAccountIndexView.vue";
import ForgotPasswordIndexView from "@/views/Login/ForgotPasswordIndexView.vue";
import TaskView from "@/views/Tasks/TaskView.vue";
import ProjectView from "@/views/Projects/ProjectView.vue";
import HomeIndexView from "@/views/Home/HomeIndexView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeIndexView,
  },
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
    path: "/personal-account",
    name: "personal-account",
    component: PersonalAccountIndexView,
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
  {
    path: "/tasks/:id",
    name: "task",
    component: TaskView,
  },
  {
    path: "/projects/:id",
    name: "project",
    component: ProjectView,
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
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPasswordIndexView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
