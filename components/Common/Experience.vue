<template>
    <div class="py-4">
        <div class="border-l-[3px] border-blue-500 md:pl-8 pl-4 flex md:gap-4 gap-3 items-center md:py-1.5 py-1">
            <p class="md:text-2xl text-xl font-semibold text-blue-500 capitalize">
                Experience<span class="dark:text-white text-black">.</span>
            </p>
        </div>
        <div class="md:pl-8 md:mt-8 mt-6 flex flex-col lg:flex-row justify-between md:gap-8 gap-6 items-start">
            <div class="p-8 w-full rounded-sm border border-neutral-300 shadow-md dark:border-neutral-700" >
                <p class="text-xl font-medium text-neutral-700 capitalize">
                    Full stack web developer
                </p>
                <p class="text-lg font-instrument text-neutral-600">At Clavier Technologies - Full-time</p>
                <p class="mt-3 font-instrument border w-fit py-0.5 px-2.5 text-sm border-neutral-600">
                    May 2023 - Present
                </p>
                <div class="mt-6 flex gap-2 flex-col">
                    <div class="flex gap-3 items-start">
                        <Sparkle :stroke-width="3" class="w-6 h-6 inline-block text-blue-500"/>
                        <p class="text-base text-neutral-500 tracking-wider">
                            I gained experience working with different web development tools and frameworks, especially Vue.js, Nuxt.js, Laravel, and Tailwind CSS
                        </p>
                    </div>
                    <div class="flex gap-3 items-start">
                        <Sparkle :stroke-width="3" class="w-6 h-6 inline-block text-blue-500"/>
                        <p class="text-base text-neutral-500 tracking-wider">
                            I built reusable Vue.js components and used directives and mixins to make our frontend code more functional and easier to maintain
                        </p>
                    </div>
                    <div class="flex gap-3 items-start">
                        <Sparkle :stroke-width="3" class="w-6 h-6 inline-block text-blue-500"/>
                        <p class="text-base text-neutral-500 tracking-wider">
                            I improved the efficiency and speed of our applications by optimizing database schemas and queries using Laravel's Eloquent ORM.
                        </p>
                    </div>
                </div>
                <div class="flex gap-2 items-center flex-wrap mt-6">
                    <LazyCommonTechnology
                        v-for="(tools, ind) in [
                            'laravel',
                            'vue',
                        ]"
                        :key="ind"
                        :name="tools"
                    />
                    <p class="capitalize pl-2 text-neutral-500 text-sm">+6 Skills</p>
                </div>
            </div>
        </div>
    </div>
</template>