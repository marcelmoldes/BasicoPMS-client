<template>
  <div class="grid grid-cols-4 my-5 gap-4">
    <div>
      <h3 class="mb-2 font-medium">Open</h3>
      <ul role="list" class="grid grid-cols-1 gap-y-4">
        <template v-for="project of projects.data" :key="project">
          <ProjectCard
            :user="user"
            :project="project"
            v-if="project.status === 'open'"
          ></ProjectCard>
        </template>
      </ul>
    </div>
    <div>
      <h3 class="mb-2 font-medium">In Progress</h3>
      <ul role="list" class="grid grid-cols-1 gap-y-4">
        <template v-for="project of projects.data" :key="project">
          <ProjectCard
            :user="user"
            :project="project"
            v-if="project.status === 'in_progress'"
          ></ProjectCard>
        </template>
      </ul>
    </div>
    <div>
      <h3 class="mb-2 font-medium">Completed</h3>
      <ul role="list" class="grid grid-cols-1 gap-y-4">
        <template v-for="project of projects.data" :key="project">
          <ProjectCard
            :user="user"
            :project="project"
            v-if="project.status === 'completed'"
          ></ProjectCard>
        </template>
      </ul>
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
