<template>
  <div class="max-w-7xl mx-auto mt-10">
    <div class="justify-center">
      <projects-grid :user="user"></projects-grid>
    </div>
  </div>
</template>

<script>
import ProjectsGrid from "@/views/Projects/components/ProjectsGrid.vue";

export default {
  props: ["user"],
  components: {
    ProjectsGrid,
  },
  data() {},
};
</script>

<style scoped></style>
