<template>
  <Navbar />
  <section class="px-4">
    <div
      class="max-w-screen-xl min-h-dvh flex flex-col mx-auto md:border-l dark:border-neutral-700 border-neutral-300"
    >
      <slot />
      <Bottom class="mt-auto" />
    </div>
  </section>
</template>

<script setup>
const themeStore = useThemeStore();

useHead(() => ({
  htmlAttrs: {
    class: themeStore.getTheme().is_dark ? "dark" : "",
  },
}));
</script>
