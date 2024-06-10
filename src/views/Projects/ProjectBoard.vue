<template>
  <div class="grid grid-cols-3 m-5 gap-4">
    <div class="">
      <h3 class="ml-4 text-green-300">Open</h3>
      <template v-for="project of projects.data" :key="project">
        <ProjectCard
          :user="user"
          :project="project"
          v-if="project.status === 'open'"
        ></ProjectCard>
      </template>
    </div>
    <div>
      <h3 class="ml-4 text-green-500">In Progress</h3>
      <template v-for="project of projects.data" :key="project">
        <ProjectCard
          :user="user"
          :project="project"
          v-if="project.status === 'in_progress'"
        ></ProjectCard>
      </template>
    </div>
    <div>
      <h3 class="ml-4 text-green-700">Completed</h3>
      <template v-for="project of projects.data" :key="project">
        <ProjectCard
          :user="user"
          :project="project"
          v-if="project.status === 'completed'"
        ></ProjectCard>
      </template>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import ProjectCard from "@/views/Projects/components/ProjectCard.vue";
export default {
  components: { ProjectCard },
  props: ["user"],
  emits: ["editProject", "createproject"],
  data() {
    return {
      formatters,
      projects: [],
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
        currentPage: 1,
        perPage: "10",
      },
      showForm: false,
      projectId: false,
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
    await this.loadProjects();
  },
  methods: {
    async loadProjects() {
      const response = await axios.get("http://localhost:3000/projects", {
        params: this.params,
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

<style lang="scss" scoped></style>
