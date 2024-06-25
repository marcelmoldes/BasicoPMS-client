<template>
  <div>
    <h1 class="text-4xl mt-12 font-bold tracking-tight text-black sm:text-6xl">
      Forgot your Password?
    </h1>
    <p
      class="relative mt-6 text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none my-6"
    >
      If you cannot access your account fill out the form below to reset your
      account password.
    </p>
    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
      <form
        @submit.prevent="forgotPassword"
        class="flex flex-col gap-y-6 px-12 py-12 inset-0 w-ful rounded-md shadow-gray-600 bg-white object-cover shadow-2xl"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-1 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <span
            v-if="error"
            class="rounded-full bg-red-50 text-md px-4 py-2 font-medium text-red-700 ring-1 ring-inset ring-red-600"
            >{{ error }}</span
          >
        </div>

        <button
          class="font-semibold border border-white rounded-full py-2 bg-indigo-500 hover:opacity-90 text-white"
          type="submit"
        >
          Reset Password
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      error: null,
    };
  },
  methods: {
    async forgotPassword() {
      this.error = null;
      try {
        const response = await axios.post(
          "http://localhost:3000/forgot-password",
          {
            email: this.email,
          }
        );
        this.message = response.data.message;
      } catch (error) {
        if (error.response && error.response.data) {
          this.error = error.response.data.message;
        } else {
          this.error = "An unexpected error occurred.";
        }
      }
    },
  },
};
</script>

<style></style>
