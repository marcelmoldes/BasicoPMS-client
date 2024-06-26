<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="">
          <img
            class="h-20 w-20 rounded-lg"
            src="../assets/images/basico-pms-logo.png"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          @click="mobileMenuOpen = true"
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
        >
          <span class="sr-only">Open main menu</span>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div class="hidden gap-x-4 lg:flex lg:flex-1 lg:justify-end">
        <a
          @click="$router.push('/login')"
          class="gap-x-6 text-sm cursor-pointer px-8 p-2 font-bold hover:bg-indigo-400 rounded-3xl bg-indigo-500 text-white"
          >Log in
        </a>

        <a
          @click="$router.push('/register')"
          class="text-sm cursor-pointer px-8 p-2 font-bold hover:bg-indigo-400 rounded-3xl bg-indigo-500 text-white"
          >Register
        </a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </a>
          <button
            @click="closeMenu"
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-400"
          >
            <span class="sr-only">Close menu</span>
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

        <div class="py-6">
          <a
            @click="$router.push('/login')"
            class="-mx-3 block cursor-pointer border-2 border-white rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-gray-800"
            >Log in</a
          >
        </div>
        <div class="py-6">
          <a
            @click="$router.push('/register')"
            class="-mx-3 block cursor-pointer border-2 border-white rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-gray-800"
            >Register</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.mobileMenuOpen = false;
    },
  },
};
</script>
