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
        class="flex flex-col gap-y-6 px-12 py-12 justify-center inset-0 w-ful rounded-md shadow-gray-600 bg-indigo-400 object-cover shadow-2xl"
      >
        <div class="flex flex-col gap-y-1">
          <label
            class="text-sm mr-6 md:text-lg font-medium text-white ml-1"
            for="email"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            class="rounded-md px-5 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            name="email"
            placeholder="basicopms@example.com"
            type="email"
          />
        </div>
        <div
          v-if="message"
          class="text-lg p-1 rounded-lg bg-green-500 text-white"
        >
          {{ message }}
        </div>
        <div
          v-if="error"
          class="text-lg rounded-lg bg-red-600 p-1 font-sans text-white"
        >
          {{ error }}
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
      message: null,
      error: null,
    };
  },
  methods: {
    async forgotPassword() {
      this.message = null;
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
