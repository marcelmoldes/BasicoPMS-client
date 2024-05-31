<template>
  <div class="grid grid-cols-4 gap-4">
    <div>
      <h3>Open</h3>
      <template v-for="task of tasks.data" :key="task">
        <TaskCard
          :user="user"
          :task="task"
          v-if="task.status === 'open'"
        ></TaskCard>
      </template>
    </div>
    <div>
      <h3>In Progress</h3>
      <template v-for="task of tasks.data" :key="task">
        <TaskCard
          :user="user"
          :task="task"
          v-if="task.status === 'in_progress'"
        ></TaskCard>
      </template>
    </div>
    <div>
      <h3>Completed</h3>
      <template v-for="task of tasks.data" :key="task">
        <TaskCard
          :user="user"
          :task="task"
          v-if="task.status === 'completed'"
        ></TaskCard>
      </template>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import TaskCard from "@/views/Tasks/components/TaskCard.vue";
export default {
  components: { TaskCard },
  props: ["user"],
  emits: ["editTask", "createTask"],
  data() {
    return {
      formatters,
      tasks: [],
      meta: {},
      params: {
        searchString: "",
        sortBy: "createdAt",
        sortOrder: "desc",
        currentPage: 1,
        perPage: "10",
      },
      showForm: false,
      taskId: false,
    };
  },
  watch: {
    params: {
      handler() {
        this.loadTasks();
      },
      deep: true,
    },
  },
  async mounted() {
    await this.loadTasks();
  },
  methods: {
    async loadTasks() {
      const response = await axios.get("http://localhost:3000/tasks", {
        params: this.params,
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

<style lang="scss" scoped></style>
