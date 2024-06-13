<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center my-6">
      <div class="text-3xl font-medium">Projects</div>
      <mode-selection-bar
        :currentMode="mode"
        @showCard="mode = 'card'"
        @showGrid="mode = 'grid'"
        @showCalendar="mode = 'calendar'"
      />
    </div>
    <div class="justify-center">
      <projects-grid v-if="mode === 'grid'" :user="user"></projects-grid>
      <project-board v-if="mode === 'card'" :user="user"></project-board>
      <project-calendar
        v-if="mode === 'calendar'"
        :user="user"
      ></project-calendar>
    </div>
  </div>
</template>

<script>
import ProjectsGrid from "@/views/Projects/components/ProjectsGrid.vue";
import ModeSelectionBar from "@/components/ModeSelectionBar.vue";
import ProjectBoard from "@/views/Projects/ProjectBoard.vue";
import ProjectCalendar from "@/views/Projects/components/ProjectCalendar.vue";

export default {
  props: ["user"],
  components: {
    ProjectCalendar,

    ProjectBoard,
    ModeSelectionBar,
    ProjectsGrid,
  },
  data() {
    return {
      mode: "grid",
    };
  },
};
</script>

<style scoped></style>
