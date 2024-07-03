<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0"></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <div class="pointer-events-auto w-screen max-w-md">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
            >
              <div class="px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-base font-sans leading-6 text-gray-900"
                    id="slide-over-title"
                  >
                    Panel title
                  </h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      @click="emitClose"
                      type="button"
                      class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span class="absolute -inset-2.5"></span>
                      <span class="sr-only">Close panel</span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div v-if="!spin">
                <form>
                  <div class="px-4 py-6 sm:p-8">
                    <div
                      class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                    >
                      <div class="sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >First Name</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="userData.firstName"
                            type="text"
                            id="first-name"
                            autocomplete="given-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.firstName
                                ? 'ring-red-500'
                                : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.firstName"
                          >
                            {{ errors.firstName }}
                          </div>
                        </div>
                      </div>
                      <div class="sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Last Name</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="userData.lastName"
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.lastName ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.lastName"
                          >
                            {{ errors.lastName }}
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Email</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="userData.email"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.email ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.email"
                          >
                            {{ errors.email }}
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Role</label
                        >
                        <div class="mt-2">
                          <select
                            v-model="userData.role"
                            class="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option
                              :value="option.value"
                              v-for="option of roleOptions"
                              :key="option"
                            >
                              {{ option.label }}
                            </option>
                          </select>

                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.role"
                          >
                            {{ errors.role }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between border-t border-gray-900/10 px-4 py-4 sm:px-8"
                  >
                    <div>
                      <button
                        v-if="this.userId ? showViewButton : ''"
                        @click="removeUser(user.id)"
                        type="button"
                        class="rounded-md bg-red-700 px-3 py-2 text-sm font-sans text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Delete
                      </button>
                    </div>

                    <div class="justify-center">
                      <button
                        @click="emitClose"
                        type="button"
                        class="rounded-md m-2 bg-indigo-400 px-3 py-2 text-sm font-sans text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Cancel
                      </button>
                      <button
                        @click="save"
                        type="button"
                        class="rounded-md bg-indigo-400 px-3 py-2 text-sm font-sans text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="py-4 grow flex justify-center items-center" v-else>
                <svg
                  aria-hidden="true"
                  class="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["user", "userId", "showViewButton"],
  data() {
    return {
      userData: {
        id: "",
        firstName: "",
        lastName: "",
        teamId: "",
        email: "",
        role: "",
      },
      spin: false,
      errors: {},
      roleOptions: [],
    };
  },
  async mounted() {
    this.spin = true;
    if (this.userId) {
      await this.loadData();
    }
    await this.loadOptions();
    this.spin = false;
  },
  methods: {
    formatISODate(isoDate) {
      const date = new Date(isoDate);
      return date.toISOString().split("T")[0];
    },
    async loadOptions() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL + "/user/config",
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      this.roleOptions = response.data.roleOptions;
    },
    async loadData() {
      const response = await axios.get(
        process.env.VUE_APP_API_URL + "/users/" + this.userId,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.userData = response.data;
        this.userData.createdAt = this.formatISODate(this.user.createdAt);
      }
    },
    async removeUser() {
      const confirmDelete = confirm(
        "Are you sure you want to delete this User?"
      );
      if (confirmDelete) {
        await axios.delete(
          process.env.VUE_APP_API_URL + "users/" + this.userId,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
        );
        this.$emit("closeForm");
      }
    },

    emitClose() {
      this.$emit("closeForm");
    },
    async save() {
      try {
        if (this.userData.id) {
          await axios.patch(
            process.env.VUE_APP_API_URL + "/users/" + this.userData.id,
            this.userData,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
          );
        } else {
          await axios.post(
            process.env.VUE_APP_API_URL + "/users",
            this.userData,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
          );
        }
        this.$emit("closeForm");
      } catch ({ response }) {
        this.errors = response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
