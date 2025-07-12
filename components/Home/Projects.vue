<template>
  <div class="md:py-32 py-16">
    <div
      class="border-l-[3px] border-blue-500 md:pl-8 pl-4 flex md:gap-4 gap-3 items-center md:py-1.5 py-1"
    >
      <p class="md:text-2xl text-xl font-semibold text-blue-500 capitalize">
        Projects<span class="dark:text-white text-black">.</span>
      </p>
    </div>
    <div class="md:pl-8 md:mt-8 mt-6 flex justify-between gap-8 items-start">
      <div class="max-w-xs w-full">
        <ul class="flex flex-col gap-4">
          <li
            class="text-lg capitalize font-normal cursor-pointer"
            @click="tabIndex = 0"
            :class="tabIndex == 0 ? 'text-neutral-100' : 'text-neutral-500'"
          >
            Online Exam system
          </li>
          <li
            class="text-lg capitalize font-normal cursor-pointer"
            @click="tabIndex = 1"
            :class="tabIndex == 1 ? 'text-neutral-100' : 'text-neutral-500'"
          >
            Ecommerce
          </li>
          <li
            class="text-lg capitalize font-normal cursor-pointer"
            @click="tabIndex = 2"
            :class="tabIndex == 2 ? 'text-neutral-100' : 'text-neutral-500'"
          >
            Online food ordering system
          </li>
          <li>
            <RouterLink
              to="#"
              class="text-lg text-blue-500 capitalize underline underline-offset-2"
              >Show more</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="w-full">
        <div v-if="tabIndex == 0">
          <p class="text-3xl text-neutral-200 font-instrument tracking-wider">
            Online Exam System
          </p>
          <p class="text-neutral-400 mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            nesciunt quos aliquam velit architecto adipisci ad inventore error
            rem, impedit eaque unde quam reprehenderit sunt magnam porro esse
            delectus vel?
          </p>
          <div class="mt-4">
            <a
              target="_blank"
              href="#"
              class="py-1 w-fit flex items-center gap-1 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
            >
              <p class="uppercase font-medium text-xs">View on Github</p>
              <ArrowUpRight class="w-4" />
            </a>
          </div>
          <img
            src="@/assets/images/ventures-01.png"
            class="rounded-sm aspect-video object-top transition-all mt-8"
            alt="ventures-01"
          />
          <div class="flex gap-2 items-center flex-wrap mt-4">
            <LazyCommonTechnology
              v-for="(tools, ind) in [
                'laravel',
                'vue',
                'pinia',
                'tailwind',
                'javascript',
              ]"
              :key="ind"
              :name="tools"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabIndex = ref(0);
</script>
