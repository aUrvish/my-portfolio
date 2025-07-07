<template>
    <div class="py-4">
        <div class="border-l-[3px] border-blue-500 md:pl-8 pl-4 flex gap-4 items-center py-1.5" >
            <Terminal class="text-blue-500" />
            <p class="text-xl text-blue-500 capitalize">About Me</p>
        </div>
        <div class="md:pl-8 pl-4 flex justify-between gap-16 mt-8">
            <div>
                <img
                    src="../../assets/images/me.jpg"
                    class="w-full max-w-40 aspect-square rounded-full dark:border-0 border border-neutral-400"
                    alt="Urvish Mandaliya"
                />
            </div>
            <div class="w-100 max-w-screen-lg" >
                <p class="indent-16 text-lg text-neutral-600 dark:text-neutral-400">👋 Hi! I'm Urvish Mandaliya, a passionate Full Stack Web Developer with more than 2 years of experience in creating dynamic and scalable web applications with Vue.js and Laravel.</p>
                <p class="indent-16 text-lg mt-6 text-neutral-600 dark:text-neutral-400">I have expertise in crafting clean, efficient, and responsive user experiences on the frontend, as well as engineering strong backend systems that drive high-performing applications. I'm always enthusiastic about solving problems with code and taking my skills to the next level.</p>
                <p class="indent-16 text-lg mt-6 text-neutral-600 dark:text-neutral-400">Experienced in Vue.js, I have worked extensively with state management libraries like Pinia and Vuex to build efficient, reactive applications. I’ve implemented dynamic routing and seamless page transitions using Vue Router, enhancing the overall navigation flow. My front-end development skills include crafting clean, responsive user interfaces with Tailwind CSS, SCSS, and Bootstrap. I focus on writing modular, maintainable code that supports fast and intuitive user experiences. Additionally, I’ve developed dynamic UI components that significantly boost app interactivity and usability.</p>
                <p class="indent-16 text-lg mt-6 text-neutral-600 dark:text-neutral-400">I have a solid grasp of Laravel, enabling me to build secure RESTful APIs and robust backend systems. My experience includes integrating Laravel Livewire to create dynamic, reactive components without relying heavily on JavaScript. I’ve worked with Laravel Nova to design powerful admin dashboards and manage resources efficiently. For real-time functionality, I’ve utilized Laravel WebSockets, and I’ve also implemented Laravel Tenancy to support scalable multi-tenant architectures. I'm proficient in MySQL, handling complex data relationships and performance optimizations. Additionally, I’m well-versed in Laravel’s background jobs, queues, and task scheduling to ensure smooth automation and improved application performance.</p>
                <div class="mt-4">
                    <RouterLink class="capitalize text-blue-500 hover:underline" to="#">Read More</RouterLink>
                </div>
                
                <!-- <div class="mt-6">
                    <div class="flex items-center gap-4">
                        <MoveRight class="dark:text-neutral-200" />
                        <p class="text-lg font-medium dark:text-neutral-200">Backend Skills</p>
                    </div>
                    <div class="flex flex-col gap-1.5 pl-1 mt-2">
                        <div class="flex items-start gap-4">
                            <Sparkle class="w-5 text-blue-500" />
                            <p class="text-lg text-neutral-600 dark:text-neutral-400">Experienced in Vue.js with hands-on experience in state management using both Pinia and Vuex.</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <Sparkle class="w-5 text-blue-500" />
                            <p class="text-lg text-neutral-600 dark:text-neutral-400">Used Vue Router for dynamic routing and smooth page transitions</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <Sparkle class="w-5 text-blue-500" />
                            <p class="text-lg text-neutral-600 dark:text-neutral-400">Created clean, responsive UIs with Tailwind CSS, SCSS, and Bootstrap</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <Sparkle class="w-5 text-blue-500" />
                            <p class="text-lg text-neutral-600 dark:text-neutral-400">Wrote modular, maintainable code and provided fast, intuitive user experiences</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <Sparkle class="w-5 text-blue-500" />
                            <p class="text-lg text-neutral-600 dark:text-neutral-400">Developed dynamic UI components that improve the interactivity and usability of apps</p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>