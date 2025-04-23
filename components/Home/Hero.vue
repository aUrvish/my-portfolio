<template>
    <div class="md:py-28 py-8 flex md:flex-row flex-col justify-between items-center md:gap-12 gap-6">
        <div class="md:max-w-[280px] max-w-[180px] relative">
            <img src="../../assets/images/me.jpg"
                class="w-full aspect-square md:rounded-3xl rounded-2xl border-2 p-1 dark:border-neutral-800"
                alt="Urvish Mandaliya" />
            <p
                class="absolute right-0 bottom-0 md:text-2xl text-xl p-2 dark:bg-black bg-white rounded-full translate-x-1/4 translate-y-1/4 dark:border-neutral-800 border-2">👋</p>
        </div>
        <div class="max-w-2xl">
            <!-- <h1>Hero component</h1> -->
            <p class="capitalize dark:text-neutral-400 text-neutral-700 py-1.5 rounded-md md:px-4 px-2.5 border w-fit font-semibold dark:border-neutral-800 md:text-base text-sm"
                ><span ref="typedText"></span></p>
            <p class="dark:text-white mt-2 font-black md:text-[34px] text-[22px]">Hey, I'm Urvish Mandaliya</p>
            <!-- <div class="w-24 bg-blue-200 dark:bg-blue-200/10 h-1 rounded-md overflow-hidden" >
                <div class="h-full w-1/3 bg-blue-500 rounded-md loading-bar" ></div>
            </div> -->
            <p class="dark:text-neutral-400 md:text-base text-sm mt-4">
                I'm a passionate Full Stack Web Developer with 2 years of experience in building dynamic and scalable web apps using Vue.js and Laravel. I craft clean, responsive UIs and develop robust backends. I love solving real-world problems with code and constantly strive to improve and grow my skills 🚀.
            </p>

            <div class="mt-6 flex items-center md:gap-4 gap-2">
                <button
                class="md:py-1.5 py-1 flex items-center gap-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-neutral-100">
                    <Users class="md:w-[18px] w-4" />
                    <p class="uppercase md:text-sm text-[12px]">Contact me</p>
                </button>
                <button
                class="md:py-1.5 py-1 flex items-center gap-2 px-3 cursor-pointer rounded-md bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100">
                    <ArrowDownToLine class="md:w-[18px] w-4" />
                    <p class="uppercase md:text-sm text-[12px]">Download Resume</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Typed from 'typed.js';

const typedText = ref(null)

const handleTypeAnimation = () => {
    const options = {
        strings: ["", "Full stack web developer", "Laravel Developer", "Web Designer", "Vue.js Developer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    }

    new Typed(typedText.value, options)
}
onMounted(() => {
    handleTypeAnimation()
})
</script>

<style>
  @keyframes loadingSlide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(300%);
    }
  }

  .loading-bar {
    animation: loadingSlide 3s linear infinite;
  }
</style>