<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl">
      <div class="bg-gray-900 rounded-xl py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold leading-6 text-white">
                Tasks
              </h1>
              <input
                v-model="params.searchString"
                class="block w-full rounded-md border ring-1 ring-inset ring-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:text-gray-900 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="text"
              />
              <select
                v-model="meta.perPage"
                class="w-30 rounded-md py-2.5 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm"
              >
                <option value="3">10 Records Per Page</option>
                <option value="20">20 Records Per Page</option>
                <option value="30">30 Records Per Page</option>
              </select>
              <p class="mt-2 text-sm text-gray-300">
                A list of all the tasks in your account.
              </p>
            </div>

            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                class="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add Task
              </button>
            </div>
          </div>

          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
              >
                <table class="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Description
                      </th>

                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
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
                                params.sortBy === 'priority' &&
                                params.sortOrder === 'asc'
                              "
                              class="h-5 w-5"
                            />
                            <ChevronUpIcon v-else class="h-5 w-5" />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Due Date
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Completion Date
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Owner
                      </th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-800">
                    <tr v-for="task in tasks.data" :key="task">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
                      >
                        {{ task.name }}
                      </td>

                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ task.description }}
                      </td>

                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ task.status }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ task.priority }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ task.startDate ? task.startDate : "No start date" }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ task.endDate ? task.endDate : "No start date" }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{
                          task.completionDate
                            ? task.completionDate
                            : "No start date"
                        }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                      >
                        {{ user.firstName }}
                      </td>
                      <td
                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                      >
                        <a
                          href="#"
                          class="text-indigo-400 hover:text-indigo-300"
                          >Edit</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <button
          :class="params.page === 1 ? 'opacity-50' : 'hover:bg-gray-100'"
          :disabled="params.page === 1"
          class="relative inline-flex items-centre bg-white rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          @click="params.page--"
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
            params.page === meta.total ? 'opacity-50' : 'hover:bg-gray-100'
          "
          :disabled="params.page === meta.total"
          class="relative inline-flex items-center bg-white rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
          @click="params.page++"
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
</template>

<script>
import axios from "axios";

export default {
  props: ["user"],
  data() {
    return {
      tasks: [],
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
      },
    };
  },
  async mounted() {
    await this.loadTasks();
    await this.toggleSortOrder();
  },
  methods: {
    async loadTasks() {
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
