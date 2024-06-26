<template>
  <div class="py-4 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Welcome to BasicoPMS
        </p>
        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          A Project Manager System
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-800">
          Digital tool designed to plan, organize, and manage projects. Its
          functionalities include task assignment, progress tracking, resource
          management, team collaboration, and report generation.
        </p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8" id="imagen">
        <img
          src="@/assets/images/dashboard.png"
          class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          width="2432"
          height="1442"
        />
        <div class="relative" aria-hidden="true">
          <div
            class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="md:ml-20 py-4 md:py-24 md:mt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Manage Users,Projects and Tasks
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              "Manage projects effortlessly with BasicoPMS: task assignment,
              progress tracking, and team collaboration."
            </p>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img
            src="@/assets/images/projects.png"
            alt="Product screenshot"
            class="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            width="2432"
            height="1442"
          />
        </div>
      </div>
      <div
        class="mt-8 ml grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="flex items-start justify-end lg:order-first">
          <img
            src="@/assets/images/task-details.png"
            alt="Product screenshot"
            class="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            width="2432"
            height="1442"
          />
        </div>
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              More about your Projects and Tasks,with Attachments and Comments
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              "With BasicoPMS, easily add comments and attach files directly to
              your tasks. Enhance collaboration by sharing feedback and
              important documents all in one place, ensuring your team stays
              aligned and informed."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
