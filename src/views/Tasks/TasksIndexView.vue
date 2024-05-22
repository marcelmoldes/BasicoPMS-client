<template>
  <div class="max-w-7xl mx-auto mt-20 px-6">
    <div class="justify-center">
      <tasks-grid :user="user"></tasks-grid>
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
