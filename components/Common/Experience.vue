<template>
  <div>
    <CommonHeading
      title="Experience"
      caption="A journey of growth through hands-on roles and real-world impact."
    />
    <div
      class="md:pl-8 mt-8 flex flex-col lg:flex-row justify-between md:gap-8 gap-6 items-start"
    >
      <div class="w-full rounded-sm dark:border-neutral-700 max-w-screen-lg">
        <p
          class="text-xl font-medium text-neutral-700 dark:text-neutral-200 capitalize"
        >
          Full stack web developer
        </p>
        <p
          class="md:text-lg text-base font-instrument dark:text-neutral-400 text-neutral-600"
        >
          At Clavier Technologies - Full-time
        </p>
        <p
          class="mt-2 font-instrument border rounded-sm w-fit py-0.5 px-2.5 text-sm dark:border-neutral-700 dark:text-neutral-400 border-neutral-400 text-neutral-500"
        >
          May 2023 - Present
        </p>
        <div class="mt-6 flex gap-2 flex-col">
          <div class="flex gap-3 items-start">
            <Sparkle
              :stroke-width="3"
              class="max-w-4 w-full inline-block text-blue-500"
            />
            <p
              class="md:text-base text-sm text-neutral-500 dark:text-neutral-400 md:tracking-wider tracking-wide"
            >
              I gained experience working with different web development tools
              and frameworks, especially Vue.js, Nuxt.js, Laravel, and Tailwind
              CSS
            </p>
          </div>
          <div class="flex gap-3 items-start">
            <Sparkle
              :stroke-width="3"
              class="max-w-4 w-full inline-block text-blue-500"
            />
            <p
              class="md:text-base text-sm text-neutral-500 dark:text-neutral-400 md:tracking-wider tracking-wide"
            >
              I built reusable Vue.js components and used directives and mixins
              to make our frontend code more functional and easier to maintain
            </p>
          </div>
          <div class="flex gap-3 items-start">
            <Sparkle
              :stroke-width="3"
              class="max-w-4 w-full inline-block text-blue-500"
            />
            <p
              class="md:text-base text-sm text-neutral-500 dark:text-neutral-400 md:tracking-wider tracking-wide"
            >
              I improved the efficiency and speed of our applications by
              optimizing database schemas and queries using Laravel's Eloquent
              ORM.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
