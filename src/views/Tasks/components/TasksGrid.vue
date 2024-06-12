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
            taskId = false;
          "
          id="form"
          class="px-20 bg-indigo-700 hover:bg-indigo-600 text-white ring-black ring-3 justify-items-end gap-x-2 font-sans font-medium hover:opacity-90 border rounded-full py-2"
        >
          Create Task
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
            @click="toggleSortOrder('status')"
          >
            Status
            <span
              :class="
                params.sortBy === 'status'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="params.sortBy === 'status' && params.sortOrder === 'desc'"
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
        <th class="py-3.5 text-sm font-semibold text-gray-900" scope="col">
          <a
            class="group inline-flex cursor-pointer"
            @click="toggleSortOrder('priority')"
          >
            Priority
            <span
              :class="
                params.sortBy === 'priority'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'priority' && params.sortOrder === 'desc'
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
            @click="toggleSortOrder('dueDate')"
          >
            Due Date
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
                  params.sortBy === 'dueDate' && params.sortOrder === 'desc'
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
            @click="toggleSortOrder('completionPercentage')"
          >
            Completion Percentage
            <span
              :class="
                params.sortBy === 'completionPercentage'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'completionPercentage' &&
                  params.sortOrder === 'desc'
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
            @click="toggleSortOrder('ownerId')"
          >
            Owner
            <span
              :class="
                params.sortBy === 'ownerId'
                  ? 'group-hover:bg-gray-200'
                  : 'invisible group-hover:visible group-focus:visible'
              "
              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
            >
              <ChevronDownIcon
                v-if="
                  params.sortBy === 'ownerId' && params.sortOrder === 'desc'
                "
                class="h-5 w-5"
              />
              <ChevronUpIcon v-else class="h-5 w-5" />
            </span>
          </a>
        </th>
      </tr>
      <tbody v-if="!spin" class="divide-y divide-blue-100">
        <tr v-if="tasks.length === 0">
          <td colspan="8" class="text-center text-gray-500 py-2">
            No tasks found
          </td>
        </tr>
        <tr
          @click="
            showForm = true;
            taskId = task.id;
          "
          class="hover:bg-gray-100 cursor-pointer"
          v-for="task in tasks.data"
          :key="task"
        >
          <td
            class="whitespace-nowrap px-5 p text-sm font-medium text-gray-900"
          >
            {{ formatters.toProperCase(task.name) }}
          </td>
          <td
            class="whitespace-nowrap px-5 p text-sm font-medium text-gray-900"
          >
            {{ formatters.toProperCase(task.status) }}
          </td>
          <td
            class="whitespace-nowrap px-5 p text-sm font-medium text-gray-900"
          >
            {{ formatters.toProperCase(task.priority) }}
          </td>
          <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
            {{ formatters.formatDate(task.startDate) }}
          </td>
          <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
            {{ formatters.formatDate(task.dueDate) }}
          </td>
          <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
            {{ formatters.formatAmount(task.completionPercentage) }}
          </td>
          <td class="whitespace-nowrap text-center px-5 text-sm text-gray-500">
            {{ formatters.toProperCase(user.firstName) }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="text-center py-4" colspan="9">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
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
    <task-form
      :user="user"
      :task-id="taskId"
      @closeForm="
        showForm = false;
        loadTasks();
      "
      :showViewButton="true"
      v-if="showForm"
    ></task-form>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import axios from "axios";
import formatters from "@/helpers/formatters";
import TaskForm from "@/views/Tasks/components/TaskForm.vue";
export default {
  props: ["user"],
  components: { TaskForm, ChevronUpIcon, ChevronDownIcon },
  data() {
    return {
      formatters,
      tasks: [],
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
        currentPage: 1,
        perPage: "10",
      },
      showForm: false,
      taskId: false,
      spin: false,
    };
  },
  watch: {
    params: {
      handler() {
        this.loadTasks();
      },
      deep: true,
    },
  },
  async mounted() {
    await this.loadTasks();
    await this.toggleSortOrder();
  },
  methods: {
    async loadTasks() {
      this.spin = true;
      const response = await axios.get("http://localhost:3000/tasks", {
        params: this.params,
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.tasks = response.data;
        this.meta = response.data.meta;
      } else {
        throw "error";
      }
      this.spin = false;
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
