<template>
  <div class="mt-10">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base ml-2 font-semibold text-gray-900">Tasks</h1>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
      </div>
      <div class="-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table class="min-w-full px-3 divide-y divide-gray-300">
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
                End Date
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Status
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Owner
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Select</span>
              </th>
            </tr>
          </thead>

          <tbody v-for="task in tasks" :key="task">
            <tr>
              <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                {{ task.name }}
                <div
                  class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden"
                ></div>
              </td>
              <td
                class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              ></td>
              <td
                class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              ></td>
              <td
                class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              >
                {{ task.status }}
              </td>
              <td
                class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              >
                {{ user.firstName }}
              </td>
              <td class="px-3 py-3.5 text-sm text-gray-500"></td>

              <td
                class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
              >
                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Select<span class="sr-only">, Hobby</span>
                </button>
              </td>
            </tr>

            <!-- More plans... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tasks", "user"],
};
</script>

<style scoped></style>
