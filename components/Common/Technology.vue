<template>
  <a target="_blank" :href="selectedTechnology.link"
    v-if="selectedTechnology"
    class="flex items-center dark:bg-white/5 md:px-2.5 px-2 border border-neutral-300 dark:border-neutral-700 rounded-md cursor-pointer"
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
  </a>
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
    link: "https://laravel.com/"
  },
  {
    name: "vue",
    title: "Vue Js",
    url: "/assets/images/tools/vue.png",
    link: "https://vuejs.org/"
  },
  {
    name: "pinia",
    title: "Pinia",
    url: "/assets/images/tools/pinia.png",
    link: "https://pinia.vuejs.org/"
  },
  {
    name: "vuex",
    title: "VueX",
    url: "/assets/images/tools/vuex.png",
    link: "https://vuex.vuejs.org/"
  },
  {
    name: "tailwind",
    title: "Tailwind CSS",
    url: "/assets/images/tools/tailwind.png",
    link: "https://tailwindcss.com/"
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
    link: "https://www.typescriptlang.org/"
  },
  {
    name: "figma",
    title: "Figma",
    url: "/assets/images/tools/figma.png",
    link: "https://www.figma.com/"
  },
  {
    name: "nuxt",
    title: "Nuxt Js",
    url: "/assets/images/tools/nuxt.png",
    smClass: "max-w-6 max-h-6",
    normalClass: "max-w-7 max-h-7",
    link: "https://nuxt.com/"
  },
  {
    name: "php",
    title: "PHP",
    url: "/assets/images/tools/php.png",
    smClass: "max-h-3",
    normalClass: "max-h-4",
    link: "https://www.php.net/"
  },
  {
    name: "livewire",
    title: "Laravel Livewire",
    url: "/assets/images/tools/livewire.png",
    link: "https://laravel-livewire.com/"
  },
  {
    name: "nova",
    title: "Laravel Nova",
    url: "/assets/images/tools/nova.svg",
    link: "https://nova.laravel.com/"
  },
  {
    name: "bootstrap",
    title: "Bootstrap",
    url: "/assets/images/tools/bootstrap.png",
    smClass: "max-h-6 max-w-6",
    normalClass: "max-h-7 max-w-7",
    link: "https://getbootstrap.com/"
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
    link: "https://sass-lang.com/"
  },
  {
    name: "jquery",
    title: "JQuery",
    url: "/assets/images/tools/jquery.webp",
    smClass: "max-h-4 max-w-4",
    normalClass: "max-h-5 max-w-5",
    link: "https://jquery.com/"
  },
  {
    name: "mysql",
    title: "MySql",
    url: "/assets/images/tools/mysql.png",
    link: "https://www.mysql.com/"
  },
  {
    name: "sqlite",
    title: "SQLite",
    url: "/assets/images/tools/sqlite.png",
    link: "https://sqlite.org/"
  },
  {
    name: "postgresql",
    title: "postgreSQL",
    url: "/assets/images/tools/postgresql.png",
    link: "https://www.postgresql.org/"
  },
  {
    name: "mongodb",
    title: "MongoDB",
    url: "/assets/images/tools/mongodb.svg",
    link: "https://www.mongodb.com/"
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
    link: "https://aws.amazon.com/"
  },
  {
    name: "do",
    title: "DigitalOcean",
    url: "/assets/images/tools/do.svg",
    link: "https://www.digitalocean.com/"
  },
  {
    name: "forge",
    title: "Laravel Forge",
    url: "/assets/images/tools/forge.png",
    customClass: "rounded-sm",
    link:"https://forge.laravel.com/"
  },
  {
    name: "apache",
    title: "Apache",
    url: "/assets/images/tools/apache.png",
    link: "https://www.apache.org/"
  },
  {
    name: "nginx",
    title: "Nginx",
    url: "/assets/images/tools/nginx.webp",
    link: "https://nginx.org/"
  },
  {
    name: "docker",
    title: "Docker",
    url: "/assets/images/tools/docker.svg",
    link: "https://www.docker.com/"
  },
  {
    name: "github",
    title: "GitHub",
    url: "/assets/images/tools/github.webp",
    link: "https://github.com/"
  },
  {
    name: "vscode",
    title: "VS Code",
    url: "/assets/images/tools/vscode.png",
    smClass: "max-h-4 max-w-4",
    normalClass: "max-h-5 max-w-5",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "postman",
    title: "Postman",
    url: "/assets/images/tools/postman.png",
    link: "https://www.postman.com/"
  },
  {
    name: "gitlab",
    title: "GitLab",
    url: "/assets/images/tools/gitlab.svg",
    link: "https://about.gitlab.com/"
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
