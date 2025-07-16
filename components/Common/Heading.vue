<template>
  <div
    class="border-l-[3px] border-blue-500 md:pl-7 pl-4 flex md:gap-4 gap-3 items-center md:py-1.5 py-1"
  >
    <p class="md:text-2xl text-xl font-semibold text-blue-500 capitalize">
      {{ title }}<span class="dark:text-white text-black">.</span>
    </p>
  </div>
  <p
    class="md:pl-8 md:mt-0 mt-2 dark:text-neutral-400 text-neutral-500 leading-tight font-instrument font-extralight md:tracking-wider"
    v-if="caption"
  >
    {{ caption }}
  </p>
</template>

<script setup>
const props = defineProps({
  title: {
    require: true,
  },
  caption: {
    default: null,
  },
});
</script>
