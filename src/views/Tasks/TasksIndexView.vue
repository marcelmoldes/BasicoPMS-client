<template>
  <div class="max-w-7xl mx-auto mt-20 px-6 relative">
    <div class="justify-center">
      <tasks-grid :user="user"></tasks-grid>
      <task-board :user="user"></task-board>
    </div>
  </div>
</template>
<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";
import TaskBoard from "@/views/Tasks/TaskBoard.vue";
export default {
  props: ["user"],
  components: {
    TaskBoard,
    TasksGrid,
  },
};
</script>
