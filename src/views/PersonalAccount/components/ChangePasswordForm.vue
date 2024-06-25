<template>
  <div class="flex min-h-full justify-center lg:px-8">
    <div class="sm:w-full mt-9 sm:max-w-[480px]">
      <h2
        class="text-center m-4 text-xl font-bold leading-9 tracking-tight text-indigo-500"
      >
        Change Your Password
      </h2>

      <div class="bg-white py-12 shadow sm:rounded-lg sm:px-12">
        <form action="#" class="space-y-6" method="POST">
          <div>
            <label
              class="block text-sm font-medium leading-6 text-gray-900"
              for="currentPassword"
            >
              Current Password
            </label>
            <input
              v-model="userPassword.currentPassword"
              class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
              type="password"
              id="currentPassword"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium leading-6 text-gray-900"
              for="newPassword"
            >
              New Password
            </label>
            <input
              v-model="userPassword.newPassword"
              class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
              type="password"
              id="newPassword"
            />
          </div>
          <div>
            <span
              v-if="error"
              class="rounded-full ml-16 bg-red-50 text-md px-4 py-2 font-medium text-red-700 ring-1 ring-inset ring-red-600"
              >{{ error }}</span
            >
          </div>

          <button
            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            @click="changePassword"
          >
            Save
          </button>
        </form>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import axios from "axios";

export default {
  props: ["user"],
  data() {
    return {
      userPassword: {
        currentPassword: "",
        newPassword: "",
      },
      error: null,
      close: false,
    };
  },
  methods: {
    async changePassword() {
      this.error = false;

      try {
        let response = await axios.put(
          "http://localhost:3000/change-password",
          {
            currentPassword: this.userPassword.currentPassword,
            newPassword: this.userPassword.newPassword,
          },
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
        );
        if (response.data.message) {
          Toastify({
            text: "Your password has changed!",
            position: "center",
            duration: 2000,
          }).showToast();
        } else {
          this.error = response.data.message || "Unknown error occurred.";
        }
      } catch (error) {
        if (error.response && error.response.data) {
          this.error = error.response.data.message;
        } else {
          this.error = "An unexpected error occurred.";
        }
      }
    },
  },
  close() {
    this.close = true;
  },
};
</script>

<style scoped></style>
