<template>
  <div class="max-w-7xl mx-auto mt-20 px-6 relative">
    <div class="justify-center">
      <tasks-grid
        @editTask="
          taskId = $event;
          showForm = true;
        "
        @createTask="
          taskId = false;
          showForm = true;
        "
        :user="user"
      ></tasks-grid>
    </div>
    <task-form
      :user="user"
      :task-id="taskId"
      @closeForm="closeForm"
      v-if="showForm"
    ></task-form>
  </div>
</template>
<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";
import TaskForm from "@/views/Tasks/components/TaskForm.vue";
export default {
  props: ["user"],
  components: {
    TaskForm,
    TasksGrid,
  },
  data() {
    return {
      showButton: false,
      showForm: false,
      taskId: false,
    };
  },
  methods: {
    closeForm() {
      this.showForm = false;
      // this.loadTasks();
    },
  },
};
</script>
