<template>
  <div class="max-w-7xl mx-auto mt-10">
    <div class="justify-center">
      <tasks-grid :user="user" :tasks="tasks.data" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";

export default {
  props: ["user"],
  components: {
    TasksGrid,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.loadTasks();
  },
  methods: {
    async loadTasks(page = 1) {
      const response = await axios.get("http://localhost:3000/tasks", {
        params: {
          perPage: 3,
          page: page,
        },
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      if (response.data) {
        this.tasks = response.data;
      } else {
        throw "error";
      }
    },
  },
};
</script>

<style scoped></style>
