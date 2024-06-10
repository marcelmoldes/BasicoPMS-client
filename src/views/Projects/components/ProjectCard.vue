<template>
  <div class="bg-gray-50 justify-center m-3">
    <a
      href="#"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ project.name }}
      </h5>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      ></h5>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ formatters.formatDate(project.startDate) }}
      </h5>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ formatters.formatDate(project.endDate) }}
      </h5>
    </a>
  </div>
</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ["project"],
  data() {
    return {
      formatters,
    };
  },
};
</script>

<style lang="scss" scoped></style>
