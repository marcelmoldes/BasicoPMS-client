<template>
  <div>
    <div class="lg:col-start-3 lg:row-end-1">
      <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl class="flex flex-wrap">
          <div class="flex-auto pl-6 pt-6">
            <dt class="text-sm font-semibold leading-6 text-gray-900">
              Task Name
            </dt>
            <dd class="mt-1 text-base font-semibold leading-6 text-gray-900">
              {{ task.name }}
            </dd>
          </div>
          <div class="flex-none self-end px-6 pt-4">
            <dt class="sr-only">Status</dt>
            <dd
              class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >
              {{ task.status }}
            </dd>
          </div>
          <div
            class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6"
          >
            <dt class="flex-none">
              <h1>Owner</h1>
            </dt>
            <dd class="text-sm font-medium leading-6 text-gray-900">
              {{ user.firstName }}
            </dd>
          </div>
          <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt class="flex-none">
              <h1>Priority</h1>
            </dt>
            <dd class="text-sm leading-6 text-gray-500">{{ task.priority }}</dd>
          </div>
        </dl>
        <div class="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Edit Task<span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task", "user"],
};
</script>
