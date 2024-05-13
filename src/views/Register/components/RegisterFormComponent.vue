<template>
  <div>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Register to Basico Project Manager
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div
          class="bg-gray-100 px-6 py-12 shadow-2xl shadow-blue-200 sm:rounded-lg sm:px-12"
        >
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >First Name</label
              >
              <div class="mt-2">
                <input
                  v-model="formData.first_name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="errors.first_name ? 'ring-red-500' : 'ring-gray-300'"
                />
                <div class="text-red-500 text-sm mt-1" v-if="errors.first_name">
                  {{ errors.first_name }}
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Last Name</label
              >
              <div class="mt-2">
                <input
                  v-model="formData.last_name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="errors.last_name ? 'ring-red-500' : 'ring-gray-300'"
                />
                <div class="text-red-500 text-sm mt-1" v-if="errors.last_name">
                  {{ errors.last_name }}
                </div>
              </div>
            </div>
            <div></div>

            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Team Name</label
              >
              <div class="mt-2">
                <input
                  v-model="formData.team_name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="errors.team_name ? 'ring-red-500' : 'ring-gray-300'"
                />
                <div class="text-red-500 text-sm mt-1" v-if="errors.team_name">
                  {{ errors.team_name }}
                </div>
              </div>
            </div>
            <div></div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  v-model="formData.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="errors.email ? 'ring-red-500' : 'ring-gray-300'"
                />
                <div class="text-red-500 text-sm mt-1" v-if="errors.email">
                  {{ errors.email }}
                </div>
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="mt-2">
                <input
                  v-model="formData.password"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="errors.password ? 'ring-red-500' : 'ring-gray-300'"
                />
                <div class="text-red-500 text-sm mt-1" v-if="errors.password">
                  {{ errors.password }}
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm text-center leading-6">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Do you have an account?</a
                >
              </div>
            </div>

            <div>
              <button
                @click="save"
                type="button"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >Start a 14 day free trial</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        team_name: "",
      },
      errors: {},
    };
  },
  methods: {
    async save() {
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          this.formData
        );
        if (response.data) {
          Toastify({
            text: "Registration successful!",
            duration: 3000,
          }).showToast();
          setTimeout(() => this.$router.push("/login"), 3100);
        }
      } catch ({ response }) {
        this.errors = response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
