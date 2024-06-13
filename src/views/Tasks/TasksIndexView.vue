<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center my-6">
      <div class="text-3xl font-medium">Tasks</div>
      <mode-selection-bar
        :currentMode="mode"
        @showCard="mode = 'card'"
        @showGrid="mode = 'grid'"
        @showCalendar="mode = 'calendar'"
      />
    </div>
    <div class="justify-center">
      <tasks-grid v-if="mode === 'grid'" :user="user"></tasks-grid>
      <task-board
        @closeForm="showForm = false"
        v-if="mode === 'card'"
        :user="user"
      ></task-board>
      <task-calendar v-if="mode === 'calendar'" :user="user"></task-calendar>
    </div>
  </div>
</template>
<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";
import TaskBoard from "@/views/Tasks/TaskBoard.vue";
import ModeSelectionBar from "@/components/ModeSelectionBar.vue";
import TaskCalendar from "@/views/Tasks/components/TaskCalendar.vue";
export default {
  props: ["user"],
  data() {
    return {
      mode: "grid",
      showForm: false,
    };
  },
  components: {
    TaskCalendar,
    ModeSelectionBar,
    TaskBoard,
    TasksGrid,
  },
};
</script>
