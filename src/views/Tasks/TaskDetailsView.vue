<template>
  <div>
    <task-card></task-card>
  </div>
</template>

<script>
import TaskCard from "@/views/Tasks/components/TaskCard.vue";

export default {
  components: { TaskCard },
};
</script>

<style scoped>
div {
  transition: height 5ms;
}
</style>
