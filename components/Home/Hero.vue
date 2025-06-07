<template>
  <div
    class="md:py-28 sm:py-20 py-12 flex md:flex-row flex-col justify-between items-center md:gap-12 gap-6"
  >
    <div>
      <div
        class="flex sm:flex-row flex-col-reverse md:items-end md:gap-4 gap-3"
      >
        <p
          class="dark:text-white mt-2 font-black md:text-5xl sm:text-4xl text-3xl leading-none"
        >
          Hey👋, I'm <span class="text-blue-500">Urvish</span>
        </p>
        <img
          src="../../assets/images/me.jpg"
          class="w-full max-w-12 aspect-square rounded-full border border-neutral-400"
          alt="Urvish Mandaliya"
        />
      </div>
      <p
        class="dark:text-white mt-2 font-black lg:text-5xl sm:text-4xl text-xl"
      >
        a Full-Stack Web Developer
      </p>
      <p
        class="dark:text-neutral-400 md:text-lg md:leading-relaxed text-base md:mt-6 mt-4"
      >
        I'm a passionate
        <span
          class="dark:bg-white/10 bg-neutral-200 dark:text-neutral-300 text-neutral-700 leading-tight font-medium px-1.5 rounded-md"
        >
          Full Stack Web Developer</span
        >
        with
        <span
          class="dark:bg-white/10 bg-neutral-200 dark:text-neutral-300 text-neutral-700 leading-tight font-medium px-1.5 rounded-md"
          >2+ years</span
        >
        of experience in building dynamic and scalable web applications using
        <span
          class="dark:bg-white/10 bg-neutral-200 leading-tight font-medium px-1.5 rounded-md dark:text-neutral-300 text-neutral-700"
          >Vue.js</span
        >
        and
        <span
          class="dark:bg-white/10 bg-neutral-200 leading-tight font-medium px-1.5 rounded-md dark:text-neutral-300 text-neutral-700"
        >
          Laravel</span
        >. I specialize in crafting clean, responsive user interfaces and
        developing robust, secure backends. I love solving real-world problems
        with code, exploring new technologies, building innovative solutions,
        and constantly pushing myself to grow and improve every day.
      </p>

      <div class="mt-6 flex items-center md:gap-4 gap-2">
        <button
          class="md:py-2 py-1.5 flex items-center gap-3 px-3.5 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-neutral-100"
        >
          <Users class="md:w-5 w-4" />
          <p class="uppercase font-medium md:text-base text-sm">Contact me</p>
        </button>
        <button
          class="md:py-2 py-1.5 flex items-center gap-2 px-3 cursor-pointer rounded-md bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
        >
          <ArrowDownToLine class="md:w-5 w-4" />
          <p class="uppercase font-medium md:text-base text-sm">
            Download Resume
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
