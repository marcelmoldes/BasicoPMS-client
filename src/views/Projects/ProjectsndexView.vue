<template>
  <div class="max-w-7xl mx-auto mt-10">
    <div class="justify-center"></div>
    <projects-grid :user="user" :projects="projects.data"></projects-grid>
  </div>
</template>

<script>
import axios from "axios";
import ProjectsGrid from "@/views/Projects/components/ProjectsGrid.vue";

export default {
  props: ["user"],
  components: {
    ProjectsGrid,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.loadProjects();
  },
  methods: {
    async loadProjects(page = 1) {
      const response = await axios.get("http://localhost:3000/projects", {
        params: {
          perPage: 3,
          page: page,
        },
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
  },
};
</script>

<style scoped></style>
