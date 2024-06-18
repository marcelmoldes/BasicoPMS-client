<template>
  <div>
    <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div
          @click="
            showForm = true;
            projectId = project.id;
          "
          class="flex-1 truncate cursor-pointer"
        >
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">
              {{ project.name }}
            </h3>
            <span
              class="inline-flex flex-shrink-0 items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20"
              >{{ formatters.formatDate(project.startDate) }}</span
            >
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">
            {{ project.description }}
          </p>
        </div>
      </div>
    </li>
  </div>
  <div v-if="projects.length === 0">
    <h1 class="text-center py-2" colspan="9">No projects found</h1>
  </div>

  <project-form
    :user="user"
    :project-id="projectId"
    @closeForm="
      showForm = false;
      loadProjects();
    "
    :showViewButton="true"
    v-if="showForm"
  ></project-form>
</template>
<script>
import formatters from "@/helpers/formatters";
import ProjectForm from "@/views/Projects/components/ProjectForm.vue";
import axios from "axios";

export default {
  components: { ProjectForm },
  props: ["project", "user"],
  data() {
    return {
      projects: [],
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
        currentPage: 1,
        perPage: "10",
      },
      formatters,
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
        this.projects = response.data.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
