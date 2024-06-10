<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base ml-2 font-semibold text-gray-900">Projects</h1>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
      <button
        @click="this.$router.push('/projects')"
        class="bg-indigo-500 hover:bg-indigo-400 text-white rounded-md px-2 py-1 text-sm font-bold"
      >
        View More
      </button>
    </div>
    <div class="mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300 bg-white">
        <thead>
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Name
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Start Date
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="project in projects" :key="project">
            <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
              {{ project.name }}
              <div
                class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden"
              ></div>
            </td>
            <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
              {{ formatters.formatDate(project.startDate) }}
            </td>

            <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
              {{ project.status }}
            </td>
          </tr>

          <!-- More plans... -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import formatters from "@/helpers/formatters";
export default {
  props: ["projects", "user"],
  data() {
    return {
      formatters,
    };
  },
};
</script>

<style scoped></style>
