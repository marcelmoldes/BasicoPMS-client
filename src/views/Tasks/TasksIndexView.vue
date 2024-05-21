<template>
  <div class="mt-10">
    <div class="justify-center max-w-8xl">
      <tasks-grid :user="user" />
    </div>
  </div>
</template>

<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";

export default {
  props: ["user"],
  components: {
    TasksGrid,
  },
};
</script>
