<template>
  <div class="py-4">
    <CommonHeading title="About Me" />
    <div class="md:pl-8 md:mt-8 mt-6">
      <p
        class="md:indent-16 indent-6 md:text-base text-sm text-neutral-600 dark:text-neutral-400"
      >
        👋 Hi! I'm Urvish Mandaliya, a passionate
        <b>Full Stack Web Developer</b>
        with more than <b> {{ experienceInyear() }} years of experience </b> in
        creating dynamic and scalable web applications with <b>Vue.js</b> and
        <b>Laravel</b>.
      </p>
      <p
        class="md:indent-16 indent-6 md:text-base text-sm md:mt-6 mt-3 text-neutral-600 dark:text-neutral-400"
      >
        I have expertise in crafting clean, efficient, and responsive user
        experiences on the frontend, as well as engineering strong backend
        systems that drive high-performing applications. I'm always enthusiastic
        about solving problems with code and taking my skills to the next level.
      </p>
      <p
        class="md:indent-16 indent-6 md:text-base text-sm md:mt-6 mt-3 text-neutral-600 dark:text-neutral-400 md:line-clamp-none line-clamp-3"
      >
        Experienced in Vue.js, I have worked extensively with state management
        libraries like <b>Pinia</b> and <b>Vuex</b> to build efficient, reactive
        applications. I’ve implemented dynamic routing and seamless page
        transitions using <b>Vue Router</b>, enhancing the overall navigation
        flow. My front-end development skills include crafting clean, responsive
        user interfaces with <b>Tailwind CSS</b>, <b>SCSS</b>, and
        <b>Bootstrap</b>. I focus on writing modular, maintainable code that
        supports fast and intuitive user experiences. Additionally, I’ve
        developed dynamic UI components that significantly boost app
        interactivity and usability.
      </p>
      <p
        class="md:indent-16 indent-6 md:text-base text-sm md:mt-6 mt-3 text-neutral-600 dark:text-neutral-400 md:block hidden"
      >
        I have a solid grasp of Laravel, enabling me to build secure
        <b>RESTful APIs</b> and robust backend systems. My experience includes
        integrating <b>Laravel Livewire</b> to create dynamic, reactive
        components without relying heavily on JavaScript. I’ve worked with
        <b>Laravel Nova</b> to design powerful admin dashboards and manage
        resources efficiently. For real-time functionality, I’ve utilized
        <b>Laravel WebSockets</b>, and I’ve also implemented
        <b>Laravel Tenancy</b> to support scalable multi-tenant architectures.
        I'm proficient in <b>MySQL</b>, handling complex data relationships and
        performance optimizations. Additionally, I’m well-versed in Laravel’s
        background jobs, queues, and task scheduling to ensure smooth automation
        and improved application performance.
      </p>
      <div class="mt-6">
        <RouterLink
          to="#"
          class="py-1.5 w-fit flex items-center gap-1.5 px-3 cursor-pointer rounded-sm bg-black/10 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-100"
        >
          <p class="uppercase font-medium text-sm">Read more</p>
          <ArrowUpRight class="w-5" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const experienceInyear = () => {
  const startDate = new Date("2023-06-01");
  const currentDate = new Date();

  const diffTime = currentDate - startDate;
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Include leap years
  return diffYears.toFixed(1);
};
</script>
