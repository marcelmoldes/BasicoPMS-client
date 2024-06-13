<template>
  <div class="ml-2">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <button
          @click="$emit('showGrid')"
          class="rounded-md px-3 py-2 text-sm font-medium"
          :class="
            currentMode === 'grid'
              ? 'bg-indigo-500 text-white'
              : 'bg-indigo-200 hover:bg-indigo-300 text-indigo-700'
          "
        >
          Grid
        </button>
        <button
          @click="$emit('showCard')"
          class="rounded-md px-3 py-2 text-sm font-medium"
          :class="
            currentMode === 'card'
              ? 'bg-indigo-500 text-white'
              : 'bg-indigo-200 hover:bg-indigo-300 text-indigo-700'
          "
          aria-current="page"
        >
          Card
        </button>
        <button
          @click="$emit('showCalendar')"
          class="rounded-md px-3 py-2 text-sm font-medium"
          :class="
            currentMode === 'calendar'
              ? 'bg-indigo-500 text-white'
              : 'bg-indigo-200 hover:bg-indigo-300 text-indigo-700'
          "
        >
          Calendar
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentMode"],
  emits: ["showCard", "showGrid", "showCalendar"],
  data() {
    return {};
  },
};
</script>
