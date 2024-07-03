<template>
  <div class="max-w-7xl mx-auto px-4 mt-16">
    <div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-6 sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            Project Details
          </h3>
        </div>
        <div class="border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Name</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ projects.name }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Status</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ projects.status }}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Start Date</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ formatters.formatDate(projects.startDate) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">End Date</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ formatters.formatDate(projects.endDate) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Description</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ projects.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="mt-10 shadow shadow-gray-50 p-2 rounded-md">
      <div class="hidden sm:block">
        <tasks-dashlet
          :showButtons="false"
          :user="user"
          :tasks="tasks"
        ></tasks-dashlet>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import formatters from "../../helpers/formatters";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";

export default {
  props: ["user"],
  components: { TasksDashlet },
  data() {
    return {
      formatters,
      projects: [],
      tasks: [],
    };
  },
  async mounted() {
    await this.loadProjects();
    await this.loadTasks();
  },
  methods: {
    async loadTasks() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/tasks?projectId=${this.$route.params.id} `,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      this.tasks = response.data.data;
    },
    async loadProjects() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL`/projects/` + this.$route.params.id,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.projects = response.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style></style>
