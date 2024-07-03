<template>
  <div class="max-w-7xl mx-auto px-4 mt-16">
    <div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-6 sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            Task Details
          </h3>
        </div>
        <div class="border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Name</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ tasks.name }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Status</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ tasks.status }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Priority</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ tasks.priority }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Start Date</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ formatters.formatDate(tasks.startDate) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Due Date</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ formatters.formatDate(tasks.dueDate) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Description</dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {{ tasks.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="mt-10 bg-indigo-100 shadow shadow-gray-50 p-2 rounded-md">
      <div class="hidden sm:block">
        <nav class="flex space-x-4" aria-label="Tabs">
          <a
            @click="showTabs = 1"
            class="rounded-md cursor-pointer px-3 py-2 text-sm font-medium"
            :class="
              showTabs === 1
                ? 'bg-indigo-300 text-indigo-700'
                : 'rounded-md px-3 py-2 cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700'
            "
            aria-current="page"
            >Comments</a
          >
          <a
            @click="showTabs = 2"
            class="rounded-md px-3 py-2 cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700"
            :class="
              showTabs === 2
                ? 'bg-indigo-300 text-indigo-700'
                : 'rounded-md px-3 py-2 cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700'
            "
            >Attachments</a
          >
        </nav>
      </div>
    </div>
    <task-comments v-if="showTabs === 1" :user="user"></task-comments>

    <attachments-dashlet
      v-if="showTabs === 2"
      :attachments="attachments"
    ></attachments-dashlet>
  </div>
</template>

<script>
import AttachmentsDashlet from "@/components/dashlets/AttachmentsDashlet.vue";
import axios from "axios";
import TaskComments from "@/views/Tasks/components/TaskComments.vue";
import formatters from "../../helpers/formatters";

export default {
  props: ["user"],
  components: { TaskComments, AttachmentsDashlet },
  data() {
    return {
      formatters,
      attachments: [],
      tasks: [],
      comments: [],
      showTabs: 1,
    };
  },
  async mounted() {
    await this.loadAttachments();
    await this.loadComments();
    await this.loadTasks();
  },
  methods: {
    async loadComments() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/comments?taskId=${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.comments = response.data;
      } else {
        throw "error";
      }
    },
    async loadAttachments() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/attachments?taskId=${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.attachments = response.data;
      } else {
        throw "error";
      }
    },
    async loadTasks() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL + `/tasks/` + this.$route.params.id,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.tasks = response.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style></style>
