<template>
  <div class="max-w-7xl mx-auto mt-20 px-4">
    <div class="">
      <banner-heading @showCard="show = 'card'" @showGrid="show = 'grid'" />
    </div>
    <div class="justify-center">
      <projects-grid v-if="show === 'grid'" :user="user"></projects-grid>
      <project-board v-if="show === 'card'" :user="user"></project-board>
    </div>
  </div>
</template>

<script>
import ProjectsGrid from "@/views/Projects/components/ProjectsGrid.vue";
import BannerHeading from "@/components/BannerHeading.vue";
import ProjectBoard from "@/views/Projects/ProjectBoard.vue";

export default {
  props: ["user"],
  components: {
    ProjectBoard,
    BannerHeading,
    ProjectsGrid,
  },
  data() {
    return {
      show: "grid",
    };
  },
};
</script>

<style scoped></style>
