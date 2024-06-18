<template>
  <div class="max-w-7xl mx-4 md:mx-auto">
    <div class="justify-center">
      <kpi-dashlet :user="user"></kpi-dashlet>
    </div>
    <div class="grid gap-7 my-8 grid-cols-1 md:grid-cols-2">
      <tasks-dashlet :spin="spin" :user="user" :tasks="tasks"> </tasks-dashlet>
      <projects-dashlet
        :spin="spin"
        :user="user"
        :projects="projects"
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
      tasks: [],
      projects: [],
      spin: false,
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
        currentPage: 1,
        perPage: "5",
      },
    };
  },
  watch: {
    params: {
      handler() {
        this.loadProjects();
      },
      deep: true,
    },
  },
  async mounted() {
    await this.loadTasks();
    await this.loadProjects();
  },

  methods: {
    async loadProjects() {
      this.spin = true;
      const response = await axios.get("http://localhost:3000/projects", {
        params: this.params,
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.projects = response.data.data;
      } else {
        throw "error";
      }
      this.spin = false;
    },
    async loadTasks() {
      this.spin = true;
      const response = await axios.get("http://localhost:3000/tasks", {
        params: this.params,
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.tasks = response.data.data;
      } else {
        throw "error";
      }
      this.spin = false;
    },
  },
};
</script>

<style scoped></style>
