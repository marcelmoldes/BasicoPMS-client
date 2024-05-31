<template>
  <div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ task.name }}
              </h3>
              <span
                class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >{{ task.status }}</span
              >
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">
              {{ task.description }}
            </p>
          </div>
        </div>
        <div></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["task"],
};
</script>

<style lang="scss" scoped></style>
