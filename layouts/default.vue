<template>
    <Navbar />
    <section>
        <slot />
    </section>
</template>

<script setup >
const themeStore = useThemeStore()

useHead(() => ({
  htmlAttrs: {
    class: themeStore.getTheme().is_dark ? 'dark' : '',
  },
}))
</script>