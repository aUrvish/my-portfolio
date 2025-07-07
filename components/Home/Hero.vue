<template>
    <div class="h-dvh flex justify-center flex-col md:pt-28 py-8" >
        <div class="border-l-[3px] border-blue-500 md:pl-8 pl-4 mt-6" >
            <p class="dark:text-white dark:font-medium font-instrument font-normal lg:text-5xl sm:text-4xl text-3xl">
                Hey👋, I'm Urvish Mandaliya
            </p>
        </div>
        <div class="pl-8">
            <p class="text-blue-500 font-normal font-instrument lg:mt-4 mt-2 lg:text-4xl sm:text-3xl text-2xl">
            a Full-Stack Web Developer
            </p>
            <p class="mt-8 dark:text-neutral-300 dark:font-light font-normal text-neutral-700 md:text-base text-sm max-w-screen-md font-instrument">I'm a passionate Full Stack Web Developer with 2+ years of experience building dynamic, scalable web applications using Vue.js and Laravel. Specialized in crafting clean, responsive interfaces and developing robust, secure backends.</p>
            <div class="mt-6 flex items-center md:gap-4 gap-2">
                <button class="md:py-1.5 py-1 flex items-center gap-2.5 px-3 cursor-pointer rounded-sm bg-blue-500 hover:bg-blue-600 text-neutral-100">
                    <Users class="md:w-4 w-3" />
                    <p class="uppercase font-medium md:text-sm text-xs">Contact me</p>
                </button>
                <button class="md:py-1.5 py-1 flex items-center gap-2.5 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100">
                    <ArrowDownToLine class="md:w-4 w-3" />
                    <p class="uppercase font-medium md:text-sm text-xm">Download Resume</p>
                </button>
            </div>
            <div class="flex gap-3 items-center mt-6">
                <Mail class="md:w-[18px] w-3 dark:text-neutral-400 text-neutral-600 stroke-1" />
                <a class="md:text-base text-sm dark:text-neutral-400 text-neutral-600 dark:font-extralight font-light" href="mailto:mandaliyaurvishj7@gmail.com">mandaliyaurvishj7@gmail.com</a>
            </div>
            <Feature class="mt-12" />
        </div>
    </div>
</template>

<script setup>
import Feature from '../Common/Feature.vue';
</script>
