<template>
  <div>
    <h2 class="font-bold my-12 text-xl tracking-tight text-gray-600">
      Welcome to your Dashboard
      <span class="text-indigo-500">{{ user.firstName }}</span>
    </h2>
    <hr class="w-80 ml-12" />

    <div class="mx-auto">
      <div class="mx-auto max-w-4xl lg:max-w-none">
        <dl
          class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="flex bg-indigo-300 hover:bg-indigo-200 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-white">
              Total Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-600"
            >
              8,000+
            </dd>
          </div>
          <div class="flex bg-indigo-300 hover:bg-indigo-200 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-white">
              Total Projects
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-600"
            >
              3%
            </dd>
          </div>
          <div class="flex bg-indigo-300 hover:bg-indigo-200 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-white">
              Open Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-600"
            >
              99.9%
            </dd>
          </div>
          <div class="flex bg-indigo-300 hover:bg-indigo-200 flex-col p-8">
            <dt class="text-sm /60 font-semibold leading-6 text-white">
              End Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-600"
            >
              $70M
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {},
};
</script>

<style></style>
