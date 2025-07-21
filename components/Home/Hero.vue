<template>
  <div class="flex justify-center flex-col md:pt-40 pt-32 md:pb-32 pb-24">
    <div class="md:border-l-[3px] border-blue-500 md:pl-8 mt-6">
      <p
        class="dark:text-white font-instrument font-normal md:text-5xl text-4xl flex items-center gap-3"
      >
        Hey, I'm
        <img
          src="../../assets/images/me.jpg"
          class="md:max-w-10 max-w-9 inline-block aspect-square rounded-full dark:border-0 border border-neutral-400"
          alt="Urvish Mandaliya"
        />
        <span class="sm:inline hidden">Urvish Mandaliya</span>
      </p>
    </div>
    <p
      class="dark:text-white font-instrument font-normal text-4xl sm:hidden block"
    >
      Urvish Mandaliya
    </p>
    <div class="md:pl-8">
      <p
        class="text-blue-500 font-normal font-instrument lg:mt-4 mt-2 md:text-4xl sm:text-3xl text-2xl"
      >
        a Full-Stack Web Developer
      </p>
      <p
        class="md:mt-8 mt-5 dark:text-neutral-300 dark:font-light font-normal text-neutral-700 text-base max-w-screen-md md:tracking-widest tracking-wider font-instrument"
      >
        I'm a passionate Full Stack Web Developer with 2+ years of experience
        building dynamic, scalable web applications using Vue.js and Laravel.
        Specialized in crafting clean, responsive interfaces and developing
        robust, secure backends.
      </p>
      <div class="mt-6 flex items-center md:gap-4 gap-2">
        <button
          class="py-1.5 flex items-center gap-2.5 px-3 cursor-pointer rounded-sm bg-blue-500 hover:bg-blue-600 text-neutral-100"
        >
          <Users class="w-4" />
          <p class="uppercase font-medium text-sm">Contact me</p>
        </button>
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
</script>
