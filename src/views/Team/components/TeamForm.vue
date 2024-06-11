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
              <div>
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
                          >Team</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="userData.teamId"
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.teamId ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.teamId"
                          >
                            {{ errors.teamId }}
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
                          <input
                            v-model="userData.role"
                            class="block font-sans w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.role ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
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
      errors: {},
    };
  },
  async mounted() {
    if (this.userId) {
      await this.loadData();
    }
  },
  methods: {
    formatISODate(isoDate) {
      const date = new Date(isoDate);
      return date.toISOString().split("T")[0];
    },
    async loadData() {
      const response = await axios.get(
        "http://localhost:3000/users/" + this.userId,
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
        await axios.delete("http://localhost:3000/users/" + this.userId, {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        });
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
            "http://localhost:3000/users/" + this.userData.id,
            this.userData,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
          );
        } else {
          await axios.post("http://localhost:3000/users", this.userData, {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
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
