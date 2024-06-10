<template>
  <div class="max-w-7xl mx-auto mt-20 px-6 relative">
    <div class="">
      <banner-heading @showCard="show = 'card'" @showGrid="show = 'grid'" />
    </div>
    <div class="justify-center">
      <tasks-grid v-if="show === 'grid'" :user="user"></tasks-grid>
      <task-board
        @closeForm="showForm = false"
        v-if="show === 'card'"
        :user="user"
      ></task-board>
    </div>
  </div>
</template>
<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";
import TaskBoard from "@/views/Tasks/TaskBoard.vue";
import BannerHeading from "@/components/BannerHeading.vue";
export default {
  props: ["user"],
  data() {
    return {
      show: "grid",
      showForm: false,
    };
  },
  components: {
    BannerHeading,
    TaskBoard,
    TasksGrid,
  },
};
</script>
