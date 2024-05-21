<template>
  <div class="max-w-7xl mx-auto">
    <div class="justify-center">
      <kpi-dashlet :user="user"></kpi-dashlet>
    </div>
    <div class="grid m-12 grid-cols-1 md:grid-cols-2 gap-1">
      <tasks-dashlet :user="user" :tasks="tasks.data"></tasks-dashlet>
      <projects-dashlet
        :user="user"
        :projects="projects.data"
      ></projects-dashlet>
    </div>
  </div>
</template>

<script>
import KpiDashlet from "@/views/Dashboard/components/KpiDashlet.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";
import ProjectsDashlet from "@/components/dashlets/ProjectsDashlet.vue";
import axios from "axios";

export default {
  props: ["user"],
  components: {
    KpiDashlet,
    TasksDashlet,
    ProjectsDashlet,
  },
  data() {
    return {
      projects: [],
      tasks: [],
    };
  },
  mounted() {
    this.loadProjects();
    this.loadTasks();
  },
  methods: {
    async loadProjects() {
      const response = await axios.get("http://localhost:3000/projects", {
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.projects = response.data;
      } else {
        throw "error";
      }
    },

    async loadTasks() {
      const response = await axios.get("http://localhost:3000/tasks", {
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.tasks = response.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style scoped></style>
