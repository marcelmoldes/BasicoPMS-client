<template>
  <div class="m-40 mt-10">
    <team-kpi></team-kpi>
    <team-card :user="user"></team-card>
  </div>
  <div class="m-52">
    <team-calendar></team-calendar>
  </div>
</template>

<script>
import TeamCard from "@/views/Team/components/TeamGrid.vue";
import TeamKpi from "@/views/Team/components/TeamKpi.vue";
import TeamCalendar from "@/views/Team/components/TeamCalendar.vue";

export default {
  props: ["user"],
  components: { TeamCalendar, TeamKpi, TeamCard },
};
</script>

<style lang="scss" scoped></style>
