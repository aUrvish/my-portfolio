<template>
    <div class="grid grid-cols-2 gap-8">
        <div class="md:py-6 py-2" >
            <h4 class="text-[28px] dark:text-neutral-100 font-semibold">About me.</h4>
            <div class="mt-6">
                <p class="text-base dark:text-neutral-300 leading-relaxed font-normal">
                    I have been coding for over 2 years, beginning my journey in 2023. Initially, I learned HTML, CSS, and JavaScript to build websites.
                </p>
                <p class="text-base dark:text-neutral-300 leading-relaxed font-normal my-5">
                    My first project was a simple website built with HTML, CSS, and JavaScript (~mid-2023).
                </p>
                <p class="text-base dark:text-neutral-300 leading-relaxed font-normal">
                    As I progressed, I focused heavily on React.js and Next.js. Now, I specialize in building SaaS applications with modern web technologies.
                </p>
            </div>
            <button class="flex items-center gap-2 py-1.5 px-3 bg-blue-500 hover:bg-blue-600 text-neutral-100 mt-6 rounded-md">
                <Github class="w-5" />
                <p class="text-sm uppercase">View My Github</p>
            </button>
        </div>
        <div>
            <div class="border rounded-xl p-8 border-neutral-600">
                <div class="flex gap-4 items-center">
                    <CodeXml class="w-6 text-neutral-100" />
                    <p class="text-lg text-neutral-100 uppercase">My Studio</p>
                </div>
                <p class="mt-6 text-neutral-100 text-base">it's a window into my world, where passion meets purpose. Discover my work.</p>

                <div class="flex flex-col gap-4 mt-6">
                    <div class="dark:bg-white/5 p-4 border dark:border-neutral-700 rounded-lg">
                        <Laptop class="w-8 h-8 dark:text-neutral-100" />
                        <h6 class="text-lg mt-2 text-neutral-100 font-semibold">Full Stack web development</h6>
                        <p class="text-base mt-1 text-neutral-300 font-normal">Building high-performance websites with clean code and strong SEO fundamentals.</p>
                    </div>
                    <div class="dark:bg-white/5 p-4 border dark:border-neutral-700 rounded-lg">
                        <Palette class="w-8 h-8 dark:text-neutral-100" />
                        <h6 class="text-lg mt-2 text-neutral-100 font-semibold">Web design</h6>
                        <p class="text-base mt-1 text-neutral-300 font-normal">Crafting modern, intuitive user interfaces that engage and convert users.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>