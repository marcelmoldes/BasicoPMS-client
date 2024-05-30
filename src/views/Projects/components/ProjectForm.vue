<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Background backdrop, show/hide based on slide-over state. -->
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
                          >Name</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="project.name"
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.name ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.name"
                          >
                            {{ errors.name }}
                          </div>
                        </div>
                      </div>
                      <div class="sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Status</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="project.status"
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.status ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.status"
                          >
                            {{ errors.status }}
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Project</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="project.projectId"
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.projectId
                                ? 'ring-red-500'
                                : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.projectId"
                          >
                            {{ errors.projectId }}
                          </div>
                        </div>
                      </div>
                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Start Date</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="project.startDate"
                            type="date"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.startDate
                                ? 'ring-red-500'
                                : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.startDate"
                          >
                            {{ errors.startDate }}
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >End Date</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="project.endDate"
                            type="date"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="
                              errors.endDate ? 'ring-red-500' : 'ring-gray-300'
                            "
                          />
                          <div
                            class="text-red-500 text-sm mt-1"
                            v-if="errors.endDate"
                          >
                            {{ errors.endDate }}
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Owner</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block font-sans w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <div>
                          <label
                            for="comment"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Description</label
                          >
                          <div class="mt-2 mr-3">
                            <textarea
                              v-model="project.description"
                              rows="4"
                              name="comment"
                              id="comment"
                              class="font-sans w-40 px-2 mr-4 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              :class="
                                errors.description
                                  ? 'ring-red-500'
                                  : 'ring-gray-300'
                              "
                            ></textarea>
                            <div
                              class="text-red-500 text-sm mt-1"
                              v-if="errors.description"
                            >
                              {{ errors.description }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex items-center justify-between border-t border-gray-900/10 px-4 py-4 sm:px-8"
                  >
                    <button
                      v-if="this.projectId ? showViewButton : ''"
                      @click="removeProject(projectId)"
                      type="button"
                      class="rounded-md bg-red-700 px-3 py-2 text-sm font-sans text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Delete
                    </button>
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
  props: ["user", "projectId", "showViewButton"],
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      project: {
        id: "",
        projectId: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
      },
      errors: {},
    };
  },
  async mounted() {
    if (this.projectId) {
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
        "http://localhost:3000/projects/" + this.projectId,
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        }
      );
      if (response.data) {
        this.project = response.data;
        this.project.startDate = this.formatISODate(this.project.startDate);
        this.project.endDate = this.formatISODate(this.project.endDate);
      }
    },
    async removeProject() {
      const confirmDelete = confirm(
        "Are you sure you want to delete this Project?"
      );
      if (confirmDelete) {
        await axios.delete("http://localhost:3000/projects/" + this.projectId, {
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
        if (this.project.id) {
          await axios.patch(
            "http://localhost:3000/projects/" + this.project.id,
            this.project,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
          );
        } else {
          await axios.post("http://localhost:3000/projects", this.project, {
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
