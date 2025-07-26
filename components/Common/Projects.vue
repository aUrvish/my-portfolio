<template>
  <div
    class="flex flex-col lg:flex-row justify-between md:gap-8 gap-6 items-start"
  >
    <div class="xl:max-w-xs lg:max-w-64 w-full">
      <ul
        class="flex lg:flex-col lg:gap-2 md:gap-8 gap-6 lg:border-0 border-b dark:border-neutral-600 border-neutral-400 overflow-auto no-scrollbar"
      >
        <li
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap"
          @click="tabIndex = 0"
          :class="
            tabIndex == 0
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:font-normal font-semibold dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Online Exam system
        </li>
        <li
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap"
          @click="tabIndex = 2"
          :class="
            tabIndex == 2
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Online food ordering system
        </li>
        <li
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap"
          @click="tabIndex = 1"
          :class="
            tabIndex == 1
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Ecommerce
        </li>
        <li class="lg:block hidden">
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
        <p
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Online Exam System
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Developed an online exam system with a modern, responsive frontend using Vue.js and Tailwind CSS for seamless user experience. Implemented state management with Pinia, interactive features with Vue-Draggable, pagination with VueAwesome-Paginate, and notifications using Vue3-Toastify.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Backend built with Laravel, utilizing core features such as Eloquent ORM and Websockets for real-time functionality. Emphasized clear, maintainable code structure to ensure scalability and ease of collaboration with other developers.
        </p>
        <div class="mt-4">
          <a
            target="_blank"
            href="https://github.com/aUrvish/tybca-backend"
            class="py-1 w-fit flex items-center gap-1 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
          >
            <p class="uppercase font-medium text-xs">View on Github</p>
            <ArrowUpRight class="w-4" />
          </a>
        </div>
        <img
          src="@/assets/images/ventures-01.png"
          class="rounded-sm aspect-video object-top transition-all md:mt-8 mt-6 dark:border-0 border shadow-md"
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
      <div v-if="tabIndex == 1">
        <p
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Ecommerce
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
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
      <div v-if="tabIndex == 2">
        <p
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Online food ordering system
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Developed an Online Food Ordering System using Laravel, featuring user authentication with Laravel Sanctum for secure login and session management. Designed clean and modular CRUD operations for managing products, orders, and categories to ensure a smooth admin experience.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Integrated Razorpay for secure and efficient online payment processing, enabling customers to complete transactions seamlessly. Focused on writing maintainable, scalable backend logic with Laravel’s Eloquent ORM and built-in validation.
        </p>
        <div class="mt-4">
          <a
            target="_blank"
            href="https://github.com/amandaliya29/FoodMarket-backend"
            class="py-1 w-fit flex items-center gap-1 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
          >
            <p class="uppercase font-medium text-xs">View on Github</p>
            <ArrowUpRight class="w-4" />
          </a>
        </div>
        <img
          src="@/assets/images/food-app.png"
          class="rounded-sm aspect-video object-top transition-all md:mt-8 mt-6 dark:border-0 border shadow-md"
          alt="ventures-01"
        />
        <div class="flex gap-2 items-center flex-wrap mt-4">
          <LazyCommonTechnology
            v-for="(tools, ind) in [
              'laravel',
            ]"
            :key="ind"
            :name="tools"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabIndex = ref(0);
</script>
