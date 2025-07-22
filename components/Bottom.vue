<template>
  <footer>
    <div class="md:pl-8">
      <RouterLink
        :to="{ name: 'index' }"
        class="md:text-xl text-lg outline-none dark:text-white uppercase font-bold"
      >
        Urvish M.
      </RouterLink>
      <p
        class="dark:text-neutral-400 text-neutral-600 mt-2 max-w-xl md:text-base text-sm"
      >
        I'm Urvish Mandaliya - a full-stack developer & problem solver. Thanks
        for checking out my site!
      </p>
      <CommonSocial />
      <p
        class="pt-6 py-8 dark:text-neutral-400 text-neutral-600 font-instrument md:text-base text-sm"
      >
        © 2025 Urvish Mandaliya
      </p>
    </div>
  </footer>
</template>
