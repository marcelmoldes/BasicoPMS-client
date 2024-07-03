<template>
  <div class="w-full mt-36">
    <div class="mx-auto max-w-7xl px-4 md:px-12 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2
          class="text-2xl mt-3 font-bold leading-10 tracking-tight text-gray-900"
        >
          Frequently asked questions
        </h2>
        <dl class="mt-9 space-y-6 divide-y divide-gray-900/10">
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button
                aria-controls="faq-0"
                aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-gray-900"
                type="button"
              >
                <span class="text-base font-semibold leading-7"
                  >What problems does BasicoPMS solve?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6v12m6-6H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="hidden h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 12H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd v-if="menuOpen1" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                A PMS (Property Management System) in a company resolves several
                key issues related to managing properties efficiently. It
                streamlines operations by automating processes such as booking,
                billing, and housekeeping. A PMS enhances guest experience
                through seamless check-ins and personalized services. It also
                provides real-time data and analytics, enabling better
                decision-making and revenue management. Additionally, a PMS
                ensures regulatory compliance and improves communication across
                departments, ultimately boosting operational efficiency and
                profitability.
              </p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button
                aria-controls="faq-0"
                aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-gray-900"
                type="button"
              >
                <span class="text-base font-semibold leading-7"
                  >When BasicoPMS was created and for what reason?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6v12m6-6H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="hidden h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 12H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd v-if="menuOpen2" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                It was created in 2024, as part of an improvement and experience
                project, by Marcel Moldes, choosing a PMS software.
              </p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button
                aria-controls="faq-0"
                aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-gray-900"
                type="button"
              >
                <span class="text-base font-semibold leading-7"
                  >I need to pay to have BasicoPMS services?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6v12m6-6H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="hidden h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 12H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd v-if="menuOpen3" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                No, you don't need to pay, at the moment this PMS is completely
                free with all its functions, we need your support and trust to
                grow!
              </p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <button
                aria-controls="faq-0"
                aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-gray-900"
                type="button"
              >
                <span class="text-base font-semibold leading-7"
                  >What functions are there in BasicoPMS?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6v12m6-6H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="hidden h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 12H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd v-if="menuOpen4" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                A Dashboard,being able to create, edit, view and delete users,
                projects,tasks, your personal account where you can edit your
                information and password, some privileges like admin and more
                new things!
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuOpen1: false,
      menuOpen2: false,
      menuOpen3: false,
      menuOpen4: false,
    };
  },
};
</script>
