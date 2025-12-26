<template>
  <div
    class="flex flex-col lg:flex-row justify-between md:gap-8 gap-6 items-start"
  >
    <div class="xl:max-w-xs lg:max-w-64 w-full">
      <ul
        class="flex lg:flex-col lg:gap-2 md:gap-8 gap-6 lg:border-0 border-b dark:border-neutral-600 border-neutral-400 overflow-auto no-scrollbar"
      >
        <li
          class="capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap lg:truncate"
          @click="tabIndex = 0"
          :class="
            tabIndex == 0
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:font-normal font-semibold dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          CyaPay <span class="lg:inline hidden">– Digital Payments & UPI Fintech App</span>
        </li>
        <li
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap lg:truncate"
          @click="tabIndex = 1"
          :class="
            tabIndex == 1
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:font-normal font-semibold dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Ventures <span class="lg:inline hidden">– Online Exam system</span>
        </li>
        <li
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 lg:truncate whitespace-nowrap"
          @click="tabIndex = 2"
          :class="
            tabIndex == 2
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Food Market <span class="lg:inline hidden">– Online food ordering system</span>
        </li>
        <li
        v-if="page == 'projects'"
          class="md:text-lg capitalize font-normal cursor-pointer md:pb-2 pb-1 whitespace-nowrap lg:truncate"
          @click="tabIndex = 3"
          :class="
            tabIndex == 3
              ? 'dark:text-neutral-100 text-neutral-600 lg:border-0 border-b-2 dark:border-neutral-100 border-neutral-700'
              : 'text-neutral-500'
          "
        >
          Ecommerce
        </li>
        <li class="lg:block hidden" v-if="page != 'projects'">
          <RouterLink
            :to="{ name: 'projects' }"
            class="text-lg text-blue-500 capitalize underline underline-offset-2"
            >Show more</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="w-full">
      <div v-if="tabIndex == 0">
        <h3
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          CyaPay – Digital Payments & UPI Fintech App
        </h3>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          CyaPay is a prototype digital payments and UPI-based fintech application developed to meet a client requirement for showcasing a modern, secure, and scalable digital payment system. The application enables users to send and receive money within the app, perform UPI ID–based payments and bank transfers, and access detailed transaction history and transaction records for improved financial tracking and transparency.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          The app features a secure login system using Firebase Phone Authentication, ensuring fast onboarding while maintaining strong authentication security. CyaPay is designed to closely simulate real-world fintech workflows and demonstrates advanced payment logic commonly used in banking and UPI-enabled applications.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          CyaPay is built using React Native to deliver a smooth, cross-platform mobile experience. The backend is developed with Laravel, responsible for REST API development, business logic, and transaction processing. Firebase Phone Authentication is integrated for user verification. The backend infrastructure is deployed on AWS, configured with Apache, SSL encryption, and server-side security settings to ensure reliable and secure communication.
        </p>
        <div class="mt-5">
          <p class="dark:text-neutral-300 text-neutral-500 font-medium" >Core Features:</p>
          <ul class="list-disc dark:text-neutral-400 text-neutral-600 mt-2 list-inside md:text-base text-sm">
            <li>Send and receive money between registered app users</li>
            <li>UPI ID–based payments and direct bank transfers</li>
            <li>Transaction details screen with complete transaction history</li>
            <li>Secure phone number–based login using Firebase Authentication</li>
          </ul>
        </div>
        <div class="mt-5">
          <p class="dark:text-neutral-300 text-neutral-500 font-medium" >Unique Fintech Features:</p>
          <ul class="list-disc dark:text-neutral-400 text-neutral-600 mt-2 list-inside md:text-base text-sm">
            <li><span class="font-medium">Credit UPI System:</span> A UPI-based credit feature similar to a credit card. After bank approval, users are assigned a credit limit that can be used for bill payments and recharges. The utilized credit amount can later be repaid directly to the bank.</li>
            <li><span class="font-medium">NBFC Credit UPI:</span> A credit-based UPI solution managed by an NBFC and linked to a single mobile number, enabling users to make UPI payments using an allocated credit balance without requiring a traditional credit card.</li>
          </ul>
        </div>
        <div class="mt-4">
          <a
            target="_blank"
            href="https://github.com/amandaliya29/payment-app-backend"
            class="py-1 w-fit flex items-center gap-1 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
          >
            <p class="uppercase font-medium text-xs">View on Github</p>
            <ArrowUpRight class="w-4" />
          </a>
        </div>
        <img
          src="@/assets/images/cyapay.png"
          class="rounded-sm aspect-video object-top transition-all md:mt-8 mt-6 dark:border-0 border shadow-md"
          alt="Online Exam System built using Vue.js, Nuxt, and Laravel"
        />
        <div class="flex gap-2 items-center flex-wrap mt-4">
          <LazyCommonTechnology
            v-for="(tools, ind) in [
              'laravel',
              'mysql',
              'javascript',
              'aws',
              'linux',
              'apache'
            ]"
            :key="ind"
            :name="tools"
          />
        </div>
      </div>
      <div v-else-if="tabIndex == 1">
        <h3
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Ventures - Online Exam System
        </h3>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Developed an online exam system with a modern, responsive frontend
          using Vue.js and Tailwind CSS for seamless user experience.
          Implemented state management with Pinia, interactive features with
          Vue-Draggable, pagination with VueAwesome-Paginate, and notifications
          using Vue3-Toastify.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Backend built with Laravel, utilizing core features such as Eloquent
          ORM and Websockets for real-time functionality. Emphasized clear,
          maintainable code structure to ensure scalability and ease of
          collaboration with other developers.
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
          alt="Online Exam System built using Vue.js, Nuxt, and Laravel"
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
      <div v-else-if="tabIndex == 2">
        <h3
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Food Market - Online food ordering system
        </h3>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Developed an Online Food Ordering System using Laravel, featuring user
          authentication with Laravel Sanctum for secure login and session
          management. Designed clean and modular CRUD operations for managing
          products, orders, and categories to ensure a smooth admin experience.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Integrated Razorpay for secure and efficient online payment
          processing, enabling customers to complete transactions seamlessly.
          Focused on writing maintainable, scalable backend logic with Laravel’s
          Eloquent ORM and built-in validation.
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
            v-for="(tools, ind) in ['laravel', 'razorpay']"
            :key="ind"
            :name="tools"
          />
        </div>
      </div>
      <div v-else-if="tabIndex == 3 && page == 'projects'">
        <h3
          class="lg:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 dark:font-normal font-medium font-instrument tracking-wider capitalize"
        >
          Ecommerce
        </h3>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Built a dynamic E-commerce web application with Nuxt.js and custom
          CSS, focusing on responsive design and smooth user experience.
          Implemented product filtering, listing, and intuitive UI for efficient
          product discovery and navigation.
        </p>
        <p
          class="dark:text-neutral-400 text-neutral-600 md:mt-3 mt-2 md:text-base text-sm"
        >
          Developed a lightweight backend using Core PHP to handle CRUD
          operations for products, categories, and orders. Ensured clean API
          integration with Nuxt frontend for seamless data handling and user
          interaction.
        </p>
        <div class="mt-4">
          <a
            target="_blank"
            href="https://github.com/aUrvish/fashion-ecommerce-frontEnd"
            class="py-1 w-fit flex items-center gap-1 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
          >
            <p class="uppercase font-medium text-xs">View on Github</p>
            <ArrowUpRight class="w-4" />
          </a>
        </div>
        <div class="flex gap-2 items-center flex-wrap mt-4">
          <LazyCommonTechnology
            v-for="(tools, ind) in ['nuxt', 'php', 'vuex', 'javascript', 'css']"
            :key="ind"
            :name="tools"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: {
    default: "home",
  },
});
const tabIndex = ref(0);
</script>
