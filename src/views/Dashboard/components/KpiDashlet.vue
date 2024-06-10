<template>
  <div class="mt-20">
    <h2 class="font-bold ml-12 text-xl tracking-tight text-gray-900">
      Welcome to your Dashboard
      <span class="text-blue-800">{{ user.firstName }}</span>
    </h2>
    <hr class="w-80 ml-12" />

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl lg:max-w-none">
        <dl
          class="grid grid-cols-1 mt-20 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="flex bg-blue-400/60 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-600">
              Total Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-900"
            >
              8,000+
            </dd>
          </div>
          <div class="flex bg-blue-400/60 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-600">
              Total Projects
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-900"
            >
              3%
            </dd>
          </div>
          <div class="flex bg-blue-400/60 flex-col p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-600">
              Open Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-900"
            >
              99.9%
            </dd>
          </div>
          <div class="flex bg-blue-400/60 flex-col p-8">
            <dt class="text-sm /60 font-semibold leading-6 text-gray-600">
              End Tasks
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-900"
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
