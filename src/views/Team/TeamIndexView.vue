<template>
  <div class="m-40 mt-10">
    <team-grid :user="user"></team-grid>
  </div>
</template>

<script>
import TeamGrid from "@/views/Team/components/TeamGrid.vue";

export default {
  props: ["user"],
  components: { TeamGrid },
};
</script>

<style lang="scss" scoped></style>
