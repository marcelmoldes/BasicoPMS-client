<template>
  <div class="mt-10">
    <div class="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <h3 class="sr-only">Recent reviews</h3>

      <div
        class="flow-root mt-8"
        v-for="comment in comments.data"
        :key="comment"
      >
        <div class="-my-12 divide-y divide-gray-200">
          <div class="py-12">
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt="Emily Selman."
                class="h-12 w-12 rounded-full"
              />
              <div class="ml-4">
                <h4 class="text-sm font-bold text-gray-900">
                  {{ user.firstName }}
                </h4>
                <p class="text-md text-gray-500">
                  {{ formatters.formatDate(comment.createdAt) }}
                </p>
              </div>
            </div>

            <div class="mt-4 space-y-6 text-base italic text-gray-600">
              <p>
                {{ comment.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatters from "../../../helpers/formatters";

export default {
  props: ["user", "comments"],
  data() {
    return {
      formatters,
    };
  },
};
</script>

<style lang="scss" scoped></style>
