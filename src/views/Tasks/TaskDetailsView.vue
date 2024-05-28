<template>
  <div class="px-20 m-20">
    <task-details-card :user="user" :task="task" />
  </div>
</template>
<script>
import axios from "axios";
import TaskDetailsCard from "@/views/Tasks/components/TaskDetailsCard.vue";
export default {
  components: { TaskDetailsCard },
  props: ["user"],
  data() {
    return {
      task: {},
      openForm: false,
    };
  },
  async mounted() {
    await this.loadTask();
  },
  methods: {
    async loadTask() {
      const response = await axios.get(
        "http://localhost:3000/tasks/" + this.$route.params.id,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.task = response.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style scoped></style>
