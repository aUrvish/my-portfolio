<template>
  <div>
    <div>
      <h1
        class="md:text-2xl text-xl dark:text-neutral-100 text-neutral-800 dark:font-semibold font-bold"
      >
        Skills<span class="text-blue-500 font-bold text-3xl">.</span>
      </h1>
      <p
        class="md:text-base text-sm dark:text-neutral-100 text-neutral-800 dark:font-extralight font-normal"
      >
        Over the years, I have worked with a variety of technologies.
      </p>
    </div>
    <div class="mt-8">
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
        Technologies I use
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
