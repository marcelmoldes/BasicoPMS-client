<template>
  <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
    <div v-if="tasks.length === 0">
      <h1 colspan="8" class="text-center py-2">No tasks found</h1>
    </div>
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <h3 class="truncate text-sm font-medium text-gray-900">
            {{ task.name }}
          </h3>
          <span
            class="inline-flex flex-shrink-0 items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20"
            >{{ formatters.formatDate(task.startDate) }}</span
          >
        </div>
        <p class="mt-1 truncate text-sm text-gray-500">
          {{ task.description }}
        </p>
      </div>
    </div>
  </li>
</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ["task"],
  data() {
    return {
      formatters,
    };
  },
};
</script>

<style lang="scss" scoped></style>
