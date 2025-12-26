<template>
  <div class="flex justify-center flex-col md:pt-40 pt-32 md:pb-32 pb-24">
    <div class="md:border-l-[3px] border-blue-500 md:pl-8 mt-6">
      <h3
        class="dark:text-white font-instrument font-normal md:text-5xl text-4xl flex items-center gap-3"
      >
        Hey, I'm
        <img
          src="../../assets/images/me.jpg"
          class="md:max-w-10 max-w-9 inline-block aspect-square rounded-full dark:border-0 border border-neutral-400"
          alt="Urvish Mandaliya – Full-Stack Web Developer"
        />
        <span class="sm:inline hidden">Urvish Mandaliya</span>
      </h3>
    </div>
    <h3
      class="dark:text-white font-instrument font-normal text-4xl sm:hidden block"
    >
      Urvish Mandaliya
    </h3>
    <div class="md:pl-8">
      <h1
        class="text-blue-500 font-normal font-instrument lg:mt-4 mt-2 md:text-4xl sm:text-3xl text-2xl"
      >
        Full-Stack Web Developer <strong class="font-normal md:text-2xl sm:text-xl text-xl block lg:inline">(Vue.js, Nuxt.js & Laravel)</strong>
      </h1>
      <p
        class="md:mt-8 mt-5 dark:text-neutral-300 dark:font-light font-normal text-neutral-700 text-base max-w-screen-md md:tracking-widest tracking-wider font-instrument"
      >
        I’m a dedicated Full-Stack Web Developer with {{ experienceInyear() }} years of experience
        building fast, responsive, and scalable web applications using
        <strong>Vue.js, Nuxt.js, Laravel,</strong> and modern tooling.  
        I focus on crafting clean UI experiences, optimizing performance, and
        delivering secure, maintainable backend solutions.
      </p>
      <div class="mt-6 flex items-center md:gap-4 gap-2">
        <RouterLink
          :to="{ name: 'contact' }"
          class="py-1.5 flex items-center gap-2.5 px-3 cursor-pointer rounded-sm bg-blue-500 hover:bg-blue-600 text-neutral-100"
        >
          <Users class="w-4" />
          <p class="uppercase font-medium text-sm">Get in Touch</p>
        </RouterLink>
        <a
          href="/urvish-resume.pdf"
          download
          class="py-1.5 flex items-center gap-2.5 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
        >
          <ArrowDownToLine class="w-4" />
          <p class="uppercase font-medium md:text-sm">Download CV</p>
        </a>
      </div>
      <div class="flex gap-3 items-center md:mt-6 mt-4">
        <Mail
          class="md:w-[18px] w-4 dark:text-neutral-400 text-neutral-600 stroke-1"
        />
        <a
          class="text-base dark:text-neutral-400 text-neutral-600 dark:font-extralight font-light"
          href="mailto:mandaliyaurvishj7@gmail.com"
          >mandaliyaurvishj7@gmail.com</a
        >
      </div>
    </div>
    <div class="md:pl-8">
      <Feature class="md:mt-12 mt-8" />
    </div>
  </div>
</template>

<script setup>
import Feature from "../Common/Feature.vue";

const experienceInyear = () => {
  const startDate = new Date("2023-06-01");
  const currentDate = new Date();

  const diffTime = currentDate - startDate;
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Include leap years
  return Math.round(diffYears);
};
</script>
