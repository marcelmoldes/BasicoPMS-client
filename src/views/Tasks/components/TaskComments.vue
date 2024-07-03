<template>
  <div class="">
    <!-- New comment form -->
    <div class="mt-6 flex gap-x-3">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
      />
      <form action="#" class="relative flex-auto">
        <div
          class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
          :class="errors.content ? 'ring-red-500' : 'ring-gray-300'"
        >
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea
            v-model="content"
            rows="2"
            name="comment"
            id="comment"
            class="block p-4 w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Add your comment..."
          >
          </textarea>

          <div class="text-red-500 text-sm mt-1" v-if="errors.content">
            {{ errors.content }}
          </div>
        </div>
      </form>
    </div>
    <div class="w-full mt-4 flex justify-end">
      <button
        @click="createComment"
        type="button"
        class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Comment
      </button>
    </div>
  </div>
  <comment-card :user="user" :comments="comments"></comment-card>
</template>

<script>
import axios from "axios";
import CommentCard from "@/views/Tasks/components/CommentCard.vue";

export default {
  components: { CommentCard },
  props: ["user"],
  data() {
    return {
      comments: [],
      content: "",
      errors: {},
    };
  },
  async mounted() {
    await this.loadComments();
  },
  methods: {
    async loadComments() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/comments?taskId=${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      this.comments = response.data;
    },
    async createComment() {
      try {
        await axios.post(
          process.env.VUE_APP_API_URL + "/comments",
          {
            id: this.id,
            content: this.content,
            taskId: this.$route.params.id,
          },
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
        );

        await this.loadComments();
        this.content = "";
      } catch ({ response }) {
        this.errors = response.data.errors;
      }
    },
  },
};
</script>

<style></style>
