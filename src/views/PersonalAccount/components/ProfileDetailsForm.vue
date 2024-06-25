<template>
  <div>
    <div class="flex min-h-full justify-center lg:px-8">
      <div class="sm:w-full sm:max-w-[480px]">
        <h2
          class="text-center m-6 ml-24 flex text-xl font-bold leading-9 tracking-tight text-indigo-500"
        >
          Change Your Personal Information
        </h2>

        <div class="bg-white px-6 mt-2 py-12 shadow sm:rounded-lg sm:px-12">
          <form action="#" class="space-y-6" method="POST">
            <div>
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="email"
                >First Name</label
              >
              <input
                v-model="userData.firstName"
                :class="errors.firstName ? 'border border-red-300' : ''"
                class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
              <div v-if="errors.firstName" class="text-sm text-red-400">
                {{ errors.firstName }}
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Last Name</label
              >

              <input
                v-model="userData.lastName"
                :class="errors.lastName ? 'border border-red-300' : ''"
                class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
              <div v-if="errors.lastName" class="text-sm text-red-400">
                {{ errors.lastName }}
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
              <input
                v-model="userData.email"
                :class="errors.email ? 'border border-red-300' : ''"
                class="block border-2 w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
                type="email"
              />
              <div v-if="errors.email" class="text-sm text-red-400">
                {{ errors.email }}
              </div>
            </div>
            <div>
              <button
                class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                @click="save"
              >
                Save
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
export default {
  props: ["user"],
  data() {
    return {
      userData: {
        firstName: "f",
        lastName: "ff",
        email: "",
      },
      errors: {},
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let response = await axios.get(
        "http://localhost:3000/users/" + this.user.id,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      this.userData = response.data;
    },
    async save() {
      try {
        let response = await axios.patch(
          "http://localhost:3000/users/" + this.user.id,
          this.userData,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
        );
        if (response.data) {
          Toastify({
            text: "User Updated",
            position: "center",
            duration: 1000,
          }).showToast();
          await this.loadData();
        }
      } catch ({ response }) {
        this.errors = response.data.errors;
      }
    },
  },
};
</script>
