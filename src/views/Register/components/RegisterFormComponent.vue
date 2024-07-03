<template>
  <div v-if="!registered">
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
          class="bg-white px-6 py-12 shadow-2xl shadow-blue-200 sm:rounded-lg sm:px-12"
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

            <div class="flex items-center justify-between"></div>

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
      </div>
    </div>
  </div>
  <div v-if="registered">
    <div class="py-16 m-20 sm:py-24 lg:py-32">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8"
      >
        <div
          class="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7"
        >
          <h2 class="inline sm:block lg:inline xl:block">
            Check your email inbox to see your password and enjoy BasicoPMS
          </h2>
        </div>
        <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div class="flex gap-x-4">
            <button
              @click="$router.push('/login')"
              type="button"
              class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go to Login
            </button>
          </div>
        </form>
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
        team_name: "",
      },
      registered: false,
      errors: {},
    };
  },
  methods: {
    async save() {
      try {
        const response = await axios.post(
          process.env.VUE_APP_API_URL + "/register",
          this.formData
        );
        this.registered = true;
        if (response.data) {
          Toastify({
            text: "Registration Successfully!",
            duration: 2000,
          }).showToast();

          setTimeout(2000);
        }
      } catch ({ response }) {
        this.errors = response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
