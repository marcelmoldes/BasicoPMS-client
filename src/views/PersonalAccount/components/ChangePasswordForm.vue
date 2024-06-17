<template>
  <div class="flex min-h-full justify-center lg:px-8">
    <div
      v-if="error"
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-center">
              <div class="flex w-0 flex-1 justify-between">
                <p class="w-0 flex-1 text-sm font-medium text-gray-900">
                  {{ error }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:w-full mt-9 sm:max-w-[480px]">
      <h2
        class="text-center m-4 text-xl font-bold leading-9 tracking-tight text-indigo-500"
      >
        Change Your Password
      </h2>

      <div class="bg-gray-50 py-12 shadow sm:rounded-lg sm:px-12">
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
              :class="errors.currentPassword ? 'border border-red-300' : ''"
              class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
              type="password"
              id="currentPassword"
            />
            <div v-if="errors.currentPassword" class="text-sm text-red-400">
              {{ errors.currentPassword }}
            </div>
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
              :class="errors.newPassword ? 'border border-red-300' : ''"
              class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
              type="password"
              id="newPassword"
            />
            <div v-if="errors.newPassword" class="text-sm text-red-400">
              {{ errors.newPassword }}
            </div>
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
      error: false,
      errors: {},
      close: false,
    };
  },
  methods: {
    async changePassword() {
      this.error = false;
      this.errors = {};
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
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
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
