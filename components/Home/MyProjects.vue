<template>
  <div class="md:py-24 py-12">
    <div>
      <h1
        class="md:text-2xl text-xl dark:text-neutral-100 text-neutral-800 dark:font-semibold font-bold"
      >
        Recent Projects<span class="text-blue-500 font-bold text-3xl">.</span>
      </h1>
      <p
        class="md:text-base text-sm dark:text-neutral-100 text-neutral-800 dark:font-extralight font-normal"
      >
        Explore some of my recent projects below. For more, visit
        <a href="#" class="underline underline-offset-4 decoration-1">
          My GitHub profile</a
        >.
      </p>
    </div>
    <div class="md:my-14 my-10 flex flex-col md:gap-20 gap-16">
      <div
        class="flex lg:flex-row flex-col gap-6 justify-between"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div
          class="rounded-lg w-full lg:aspect-[16/11] aspect-auto flex flex-col gap-6 justify-between overflow-hidden bg-blue-500"
        >
          <!-- style="background: #26313e" -->
          <div class="md:px-12 px-3 sm:pt-6 pt-3">
            <p
              class="line-clamp-2 text-white lg:text-left sm:text-center md:text-base text-sm"
            >
              {{ project.about }}
            </p>
          </div>
          <div class="flex items-center justify-center gap-2">
            <img
              src="@/assets/images/ventures-01.png"
              class="md:max-w-lg sm:max-w-sm max-w-72 rounded-t-md hover:scale-105 hover:-rotate-2 transition-all"
              alt="ventures-01"
            />
          </div>
        </div>
        <div class="lg:max-w-sm w-full flex justify-between flex-col gap-3">
          <div>
            <p
              class="relative dark:text-neutral-300 text-neutral-800 sm:ps-8 ps-6 font-bold text-xl capitalize"
            >
              <span
                class="bg-blue-500 h-1 sm:w-5 w-4 absolute top-1/2 left-0 -translate-y-1/2"
              ></span>
              {{ project.title }}
            </p>
            <div class="sm:ps-8 ps-6">
              <p class="text-sm mt-1 dark:text-neutral-400 text-neutral-600">
                {{ project.description }}
              </p>
              <div class="my-3 flex gap-1.5 flex-col">
                <p
                  class="text-sm dark:text-neutral-400 text-neutral-600"
                  v-for="(point, ind) in project.lists"
                  :key="ind"
                >
                  <Sparkle
                    :stroke-width="3"
                    class="w-4 h-4 inline-block text-blue-500"
                  />
                  {{ point }}
                </p>
              </div>
            </div>
          </div>
          <div class="sm:ps-8 ps-6">
            <div class="flex gap-2 items-center flex-wrap">
              <LazyCommonTechnology
                v-for="(tools, ind) in project.technology"
                :key="ind"
                :name="tools"
                size="small"
              />
            </div>
            <a
              target="_blank"
              :href="project.repo_link"
              class="flex items-center gap-2 py-1 px-2.5 bg-blue-500 hover:bg-blue-600 text-neutral-100 rounded-md mt-2.5 w-fit"
            >
              <Github class="w-4" />
              <p class="text-sm capitalize">GitHub Repo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    image: "@/assets/images/ventures-01.png",
    title: "Ventures",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in animi ut magni nulla sapiente.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam fugit consequuntur reiciendis hic aliquid. Eos est laboriosam nam quod sint! Impedit, id numquam tempore harum rem placeat id",
    lists: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    technology: ["laravel", "vue", "pinia", "tailwind", "javascript"],
    repo_link: "#",
  },
  {
    image: "@/assets/images/ventures-01.png",
    title: "Ventures",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in animi ut magni nulla sapiente.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam fugit consequuntur reiciendis hic aliquid. Eos est laboriosam nam quod sint! Impedit, id numquam tempore harum rem placeat id",
    lists: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    technology: ["laravel", "vue", "pinia", "tailwind", "javascript"],
    repo_link: "#",
  },
  {
    image: "@/assets/images/ventures-01.png",
    title: "Ventures",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in animi ut magni nulla sapiente.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam fugit consequuntur reiciendis hic aliquid. Eos est laboriosam nam quod sint! Impedit, id numquam tempore harum rem placeat id",
    lists: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    technology: ["laravel", "vue", "pinia", "tailwind", "javascript"],
    repo_link: "#",
  },
]);
</script>
