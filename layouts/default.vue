<template>
  <Navbar />
  <section class="md:px-8 px-4">
    <div
      class="max-w-screen-xl mx-auto md:border-l dark:border-neutral-700 border-neutral-300"
    >
      <slot />
      <Bottom />
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
