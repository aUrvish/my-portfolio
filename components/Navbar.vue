<template>
    <header class="md:py-5 py-3 px-3 sticky top-0 backdrop-blur-md z-50">
        <div class="max-w-screen-lg mx-auto flex justify-between gap-4 items-center">
            <div class="flex items-center gap-4">
                <button class="cursor-pointer px-1 md:hidden" @click="isOpenLinkMenu = true">
                    <Menu class="dark:text-neutral-100 w-6" />
                </button>

                <RouterLink :to="{ name: 'index' }"
                    class="md:text-xl text-lg outline-none dark:text-white uppercase font-bold">
                    Urvish M.
                </RouterLink>
            </div>

            <div class="flex justify-between gap-8 items-center">
                <ul class="gap-3 items-center links md:flex hidden">
                    <li v-for="(link, index) in links" :key="index">
                        <RouterLink :to="{ name: link.route }"
                            class="dark:text-neutral-400 dark:hover:text-neutral-100 px-3 py-2 dark:hover:bg-white/10 rounded-md group capitalize text-neutral-700 hover:text-black hover:bg-black/10">
                            {{ link.name }}</RouterLink>
                    </li>
                </ul>

                <div class="flex justify-between gap-2 items-center">
                    <div class="relative">
                        <button
                            class="md:py-[7px] py-[5px] md:px-3 px-2 cursor-pointer rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                            @click="isShowModeMenu = !isShowModeMenu" v-click-outside="() => isShowModeMenu = false">
                            <!-- <Moon class="dark:text-neutral-100 w-5" /> -->
                            <component :is="activeModeObj.icon" class="dark:text-neutral-100 w-5" />
                        </button>
                        <transition name="slide-up">
                            <ul class="absolute top-[125%] flex flex-col gap-1 right-0 rounded-md border dark:border-neutral-800 dark:bg-black/90 w-40 p-1.5 bg-white/90"
                                v-show="isShowModeMenu">
                                <li class="flex items-center gap-3 px-2 cursor-pointer dark:hover:bg-white/10 py-1 rounded-md group"
                                    v-for="(mode, index) in themeMode" :key="index"
                                    @click="themeStore.setTheme(mode.name)"
                                    :class="activeTheme == mode.name ? 'dark:bg-white/10 bg-black/10' : ''">
                                    <component :is="mode.icon" class="dark:group-hover:text-neutral-100 w-5"
                                        :class="activeTheme == mode.name ? 'dark:text-neutral-100' : 'dark:text-neutral-400'" />
                                    <p class="md:text-base text-sm dark:group-hover:text-neutral-100"
                                        :class="activeTheme == mode.name ? 'dark:text-neutral-100' : 'dark:text-neutral-400'">
                                        {{ mode.name }}</p>
                                </li>
                            </ul>
                        </transition>
                    </div>
                    <button
                        class="md:py-[7px] py-[5px] flex items-center gap-1 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-neutral-100">
                        <ArrowDownToLine class="md:w-[18px] w-4" />
                        <p class="uppercase md:text-base text-sm">Resume</p>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <transition name="fade">
        <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex flex-col  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm md:hidden"
            v-show="isOpenLinkMenu">
            <ul class="p-3 w-full flex flex-col gap-2 border dark:border-neutral-800 rounded-md max-w-80 max-h-full dark:bg-[#161617]/70 bg-white/90 links shadow-md">
                <li v-for="(link, index) in links" :key="index" class="w-full">
                    <RouterLink :to="{ name: link.route }"
                        class="dark:text-neutral-400 dark:hover:text-neutral-100 px-3 py-2.5 dark:hover:bg-white/10 rounded-md group capitalize text-neutral-700 hover:text-black hover:bg-black/10 w-full flex items-center justify-between">
                        <p>{{ link.name }}</p>
                        <MoveUpRight class="w-4" />
                    </RouterLink>
                </li>
            </ul>
            <button class="absolute bottom-16 p-4 bg-white/90 dark:bg-black/90 rounded-full border shadow-lg dark:border-neutral-800"  @click="isOpenLinkMenu = false">
                <X class="text-neutral-700 dark:text-neutral-400" />
            </button>
        </div>
    </transition>
</template>

<script setup>
const themeStore = useThemeStore();
const router = useRouter()

const links = ref([
    {
        name: 'Home',
        route: 'index'
    },
    {
        name: 'Projects',
        route: 'projects'
    },
    {
        name: 'About',
        route: 'projects'
    },
    {
        name: 'Experience',
        route: 'projects'
    },
])

const themeMode = ref([
    {
        name: 'Light',
        icon: 'Sun'
    },
    {
        name: 'Dark',
        icon: 'Moon'
    },
    {
        name: 'System',
        icon: 'LaptopMinimal'
    }
])

const isShowModeMenu = ref(false);

const activeTheme = computed(() => themeStore.getTheme().theme)
const activeModeObj = computed(() => themeMode.value.find(curr => curr.name == activeTheme.value))
const isOpenLinkMenu = ref(false);

router.beforeEach(() => {
    isOpenLinkMenu.value = false
})
</script>

<style scoped>
.links .router-link-exact-active {
    @apply dark:bg-white/10 dark:text-neutral-100 text-black bg-black/10
}
</style>