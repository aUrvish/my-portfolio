<template>
  <div class="py-4">
    <div
      class="border-l-[3px] border-blue-500 md:pl-8 pl-4 flex md:gap-4 gap-3 items-center md:py-1.5 py-1"
    >
      <p class="md:text-2xl text-xl font-semibold text-blue-500 capitalize">
        Technologies I use<span class="dark:text-white text-black">.</span>
      </p>
    </div>
    <div class="md:pl-8 mt-8">
      <p
        class="uppercase dark:font-normal font-semibold md:text-lg text-base text-neutral-700 dark:text-neutral-300"
      >
        Design tools
      </p>
      <div class="flex md:gap-4 gap-2.5 items-center flex-wrap mt-3">
        <LazyCommonTechnology
          v-for="(tool, ind) in designTools"
          :key="ind"
          :name="tool"
        />
      </div>
      <p
        class="mt-7 uppercase dark:font-normal font-semibold md:text-lg text-base text-neutral-700 dark:text-neutral-300"
      >
        Tech Stack
      </p>
      <div class="flex md:gap-4 gap-2.5 items-center flex-wrap mt-3">
        <LazyCommonTechnology
          v-for="(tool, ind) in techTools"
          :key="ind"
          :name="tool"
        />
      </div>
      <p
        class="mt-7 uppercase dark:font-normal font-semibold md:text-lg text-base text-neutral-700 dark:text-neutral-300"
      >
        Database Stack
      </p>
      <div class="flex md:gap-4 gap-2.5 items-center flex-wrap mt-3">
        <LazyCommonTechnology
          v-for="(tool, ind) in databaseTools"
          :key="ind"
          :name="tool"
        />
      </div>
      <p
        class="mt-7 uppercase dark:font-normal font-semibold md:text-lg text-base text-neutral-700 dark:text-neutral-300"
      >
        DevOps Stack
      </p>
      <div class="flex md:gap-4 gap-2.5 items-center flex-wrap mt-3">
        <LazyCommonTechnology
          v-for="(tool, ind) in devopsTools"
          :key="ind"
          :name="tool"
        />
      </div>
      <p
        class="mt-7 uppercase dark:font-normal font-semibold md:text-lg text-base text-neutral-700 dark:text-neutral-300"
      >
        Productivity & Coding Tools I Use
      </p>
      <div class="flex md:gap-4 gap-2 items-center flex-wrap mt-3">
        <LazyCommonTechnology
          v-for="(tool, ind) in productivityTools"
          :key="ind"
          :name="tool"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const designTools = ref(["figma"]);
const techTools = ref([
  "laravel",
  "vue",
  "nuxt",
  "php",
  "javascript",
  "typescript",
  "pinia",
  "vuex",
  "livewire",
  "nova",
  "tailwind",
  "bootstrap",
  "jquery",
  "scss",
  "html",
  "css",
]);
const databaseTools = ref(["mysql", "sqlite", "postgresql", "mongodb"]);
const devopsTools = ref([
  "linux",
  "aws",
  "do",
  "docker",
  "forge",
  "apache",
  "nginx",
]);
const productivityTools = ref(["github", "gitlab", "vscode", "postman"]);
</script>
