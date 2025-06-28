<template>
  <div
    v-if="selectedTechnology"
    class="flex items-center dark:bg-white/5 md:px-2.5 px-2 border border-neutral-300 dark:border-neutral-700 rounded-md"
    :class="size == 'small' ? 'py-1 gap-2.5' : 'py-1 md:py-1.5 md:gap-3 gap-3'"
  >
    <img
      :src="getToolsImageUrl(selectedTechnology.url)"
      class="object-contain w-full h-full"
      :class="[
        selectedTechnology.customClass,
        size == 'small'
          ? selectedTechnology.smClass ?? 'max-w-5 max-h-5'
          : selectedTechnology.normalClass ??
            'md:max-w-6 max-w-5 md:max-h-6 max-h-5',
      ]"
      :alt="selectedTechnology.name"
    />
    <p
      class="dark:text-neutral-300 text-neutral-700 capitalize text-nowrap"
      :class="
        size == 'small' ? 'text-sm' : 'md:text-base text-[15px] font-medium'
      "
    >
      {{ selectedTechnology.title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    require: true,
  },
  size: {
    default: "normal",
  },
});

const selectedTechnology = ref(null);

const technologies = ref([
  {
    name: "laravel",
    title: "Laravel",
    url: "/assets/images/tools/laravel.png",
  },
  {
    name: "vue",
    title: "Vue Js",
    url: "/assets/images/tools/vue.png",
  },
  {
    name: "pinia",
    title: "Pinia",
    url: "/assets/images/tools/pinia.png",
  },
  {
    name: "vuex",
    title: "VueX",
    url: "/assets/images/tools/vuex.png",
  },
  {
    name: "tailwind",
    title: "Tailwind CSS",
    url: "/assets/images/tools/tailwind.png",
  },
  {
    name: "javascript",
    title: "JavaScript",
    url: "/assets/images/tools/javascript.png",
    customClass: "rounded-sm",
  },
  {
    name: "typescript",
    title: "typeScript",
    url: "/assets/images/tools/typescript.png",
    customClass: "rounded-sm",
  },
  {
    name: "figma",
    title: "Figma",
    url: "/assets/images/tools/figma.png",
  },
  {
    name: "nuxt",
    title: "Nuxt Js",
    url: "/assets/images/tools/nuxt.png",
    smClass: "max-w-6 max-h-6",
    normalClass: "max-w-7 max-h-7",
  },
  {
    name: "php",
    title: "PHP",
    url: "/assets/images/tools/php.png",
    smClass: "max-h-3",
    normalClass: "max-h-4",
  },
  {
    name: "livewire",
    title: "Laravel Livewire",
    url: "/assets/images/tools/livewire.png",
  },
  {
    name: "nova",
    title: "Laravel Nova",
    url: "/assets/images/tools/nova.svg",
  },
  {
    name: "bootstrap",
    title: "Bootstrap",
    url: "/assets/images/tools/bootstrap.png",
    smClass: "max-h-6 max-w-6",
    normalClass: "max-h-7 max-w-7",
  },
  {
    name: "html",
    title: "HTML",
    url: "/assets/images/tools/html.png",
  },
  {
    name: "css",
    title: "CSS",
    url: "/assets/images/tools/css.png",
  },
  {
    name: "scss",
    title: "SCSS",
    url: "/assets/images/tools/scss.png",
  },
  {
    name: "jquery",
    title: "JQuery",
    url: "/assets/images/tools/jquery.webp",
    smClass: "max-h-4 max-w-4",
    normalClass: "max-h-5 max-w-5",
  },
  {
    name: "mysql",
    title: "MySql",
    url: "/assets/images/tools/mysql.png",
  },
  {
    name: "sqlite",
    title: "SQLite",
    url: "/assets/images/tools/sqlite.png",
  },
  {
    name: "postgresql",
    title: "postgreSQL",
    url: "/assets/images/tools/postgresql.png",
  },
  {
    name: "mongodb",
    title: "MongoDB",
    url: "/assets/images/tools/mongodb.svg",
  },
  {
    name: "linux",
    title: "Linux",
    url: "/assets/images/tools/linux.webp",
  },
  {
    name: "aws",
    title: "AWS",
    url: "/assets/images/tools/aws.svg",
  },
  {
    name: "do",
    title: "DigitalOcean",
    url: "/assets/images/tools/do.svg",
  },
  {
    name: "forge",
    title: "Laravel Forge",
    url: "/assets/images/tools/forge.png",
    customClass: "rounded-sm",
  },
  {
    name: "apache",
    title: "Apache",
    url: "/assets/images/tools/apache.png",
  },
  {
    name: "nginx",
    title: "Nginx",
    url: "/assets/images/tools/nginx.webp",
  },
  {
    name: "docker",
    title: "Docker",
    url: "/assets/images/tools/docker.svg",
  },
  {
    name: "github",
    title: "GitHub",
    url: "/assets/images/tools/github.webp",
  },
  {
    name: "vscode",
    title: "VS Code",
    url: "/assets/images/tools/vscode.png",
    smClass: "max-h-4 max-w-4",
    normalClass: "max-h-5 max-w-5",
  },
  {
    name: "postman",
    title: "Postman",
    url: "/assets/images/tools/postman.png",
  },
  {
    name: "gitlab",
    title: "GitLab",
    url: "/assets/images/tools/gitlab.svg",
  },
]);

const handleSelectTechnology = () => {
  selectedTechnology.value = technologies.value.find(
    (technology) => technology.name == props.name
  );
};

onMounted(() => {
  handleSelectTechnology();
});
</script>
