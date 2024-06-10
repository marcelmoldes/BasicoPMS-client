<template>
  <div class="flex flex-col gap-y-3 hola">
    <div class="flex justify-between">
      <select
        v-model="params.perPage"
        class="w-30 rounded-md py-2.5 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm"
      >
        <option value="2">2 Records Per Page</option>
        <option value="5">5 Records Per Page</option>
        <option value="10">10 Records Per Page</option>
      </select>
      <div class="flex gap-x-3 items-center">
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clip-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <input
            v-model="params.searchString"
            class="block w-full rounded-md border ring-1 ring-inset ring-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:text-gray-900 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="text"
          />
        </div>
        <button
          @click="
            showForm = true;
            projectId = false;
          "
          id="form"
          class="px-20 bg-indigo-700 hover:bg-indigo-600 text-white ring-black ring-3 justify-items-end gap-x-2 font-sans font-medium hover:opacity-90 border rounded-full py-2"
        >
          Create Project
        </button>
      </div>
    </div>
    <table
      class="min-w-full divide-y divide-blue-100 rounded-md px-3 border-2 border-gray-300 bg-white"
    >
      <tr class="p-4">
        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('name')"
          >
            Name
            <span
              :class="
                params.sortBy === 'name'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="params.sortBy === 'name' && params.sortOrder === 'desc'"
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>

        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('description')"
          >
            Description
            <span
              :class="
                params.sortBy === 'description'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'description' && params.sortOrder === 'desc'
                "
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('startDate')"
          >
            Start Date
            <span
              :class="
                params.sortBy === 'startDate'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'startDate' && params.sortOrder === 'desc'
                "
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('endDate')"
          >
            End Date
            <span
              :class="
                params.sortBy === 'endDate'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'endDate' && params.sortOrder === 'desc'
                "
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('firstName')"
          >
            Owner
            <span
              :class="
                params.sortBy === 'firstName'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'firstName' && params.sortOrder === 'desc'
                "
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
      </tr>
      <tbody class="divide-y divide-blue-100">
        <tr v-if="projects.length === 0">
          <td colspan="8" class="text-center text-gray-500 py-2">
            No projects found
          </td>
        </tr>
        <tr
          @click="
            showForm = true;
            projectId = project.id;
          "
          class="hover:bg-gray-100 cursor-pointer"
          v-for="project in projects.data"
          :key="project"
        >
          <td
            class="whitespace-nowrap px-5 p text-sm font-medium text-gray-900"
          >
            {{ formatters.toProperCase(project.name) }}
          </td>
          <td class="whitespace-nowrap px-5 text-sm text-gray-500">
            {{ formatters.toProperCase(project.description) }}
          </td>
          <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
            {{ formatters.formatDate(project.startDate) }}
          </td>
          <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
            {{ formatters.formatDate(project.endDate) }}
          </td>
          <td class="whitespace-nowrap text-center px-5 text-sm text-gray-500">
            {{ formatters.toProperCase(user.firstName) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex items-center justify-between">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-l text-gray-400">
            Total results: <span class="font-medium">{{ meta.total }}</span>
          </p>
        </div>

        <div class="m-2">
          <button
            :class="
              params.currentPage === 1 ? 'opacity-50' : 'hover:bg-gray-100'
            "
            :disabled="params.currentPage === 1"
            class="relative inline-flex items-center bg-white rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            @click="params.currentPage--"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clip-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <button
            :class="
              params.currentPage === meta.lastPage
                ? 'opacity-50'
                : 'hover:bg-gray-100'
            "
            :disabled="params.currentPage === meta.lastPage"
            class="relative inline-flex items-center bg-white rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            @click="params.currentPage++"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clip-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
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
  </div>
</template>

<script>
import axios from "axios";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import formatters from "@/helpers/formatters";
import ProjectForm from "@/views/Projects/components/ProjectForm.vue";
export default {
  props: ["user"],
  emits: ["editTask", "createTask"],
  components: { ProjectForm, ChevronDownIcon, ChevronUpIcon },
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
    await this.toggleSortOrder();
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
        this.meta = response.data.meta;
      } else {
        throw "error";
      }
    },
    async toggleSortOrder(sortBy) {
      if (this.params.sortBy === sortBy) {
        this.params.sortOrder =
          this.params.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.params.sortBy = sortBy;
        this.params.sortOrder = "asc";
      }
    },
  },
};
</script>

<style scoped></style>
