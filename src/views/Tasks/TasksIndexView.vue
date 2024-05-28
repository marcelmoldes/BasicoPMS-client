<template>
  <div class="max-w-7xl mx-auto mt-20 px-6">
    <div v-if="!showForm" class="justify-center">
      <button
        @click="showForm = true"
        id="form"
        class="px-20 justify-items-end gap-x-2 font-semibold hover:opacity-90 border-gray-400 border rounded-full py-2 bg-blue-500 text-white"
      >
        Create Task
      </button>
      <tasks-grid :user="user"></tasks-grid>
    </div>
    <task-create-form v-if="showForm"></task-create-form>
  </div>
</template>
<script>
import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";
import TaskCreateForm from "@/views/Tasks/components/TaskCreateForm.vue";
export default {
  props: ["user"],
  components: {
    TaskCreateForm,
    TasksGrid,
  },
  data() {
    return {
      showForm: false,
      showButton: false,
    };
  },
};
</script>
