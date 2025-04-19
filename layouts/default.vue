<template>
    <h1>Layout template</h1>
    <slot />
</template>

<script setup >
const isDark = ref(true)

useHead(() => ({
  htmlAttrs: {
    class: isDark.value ? 'dark' : '',
  },
}))
</script>