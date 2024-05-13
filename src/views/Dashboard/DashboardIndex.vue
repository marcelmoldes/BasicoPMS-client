<template>
  <div class="max-w-7xl mx-auto">
    <div class="justify-center">
      <kpi-dashlet :user="user"></kpi-dashlet>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
      <tasks-dashlet></tasks-dashlet>
      <projects-dashlet></projects-dashlet>
    </div>
  </div>
</template>

<script>
import KpiDashlet from "@/views/Dashboard/components/KpiDashlet.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";
import ProjectsDashlet from "@/components/dashlets/ProjectsDashlet.vue";
export default {
  props: ["user"],
  components: {
    KpiDashlet,
    TasksDashlet,
    ProjectsDashlet,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
