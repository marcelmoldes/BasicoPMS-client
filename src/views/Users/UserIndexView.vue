<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-3xl m-5 mr-8 font-medium">Users</div>
    <team-grid :user="user"></team-grid>
  </div>
</template>

<script>
import TeamGrid from "@/views/Users/components/UserGrid.vue";

export default {
  props: ["user"],
  components: { TeamGrid },
};
</script>

<style lang="scss" scoped></style>
