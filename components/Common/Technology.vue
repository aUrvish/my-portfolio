<template>
  <div
    v-if="selectedTechnology"
    class="flex items-center dark:bg-white/5 px-2.5 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md gap-2.5"
  >
    <img
      :src="getToolsImageUrl(selectedTechnology.url)"
      class="max-w-5 max-h-5 w-full object-contain"
      :alt="selectedTechnology.name"
    />
    <p
      class="dark:text-neutral-300 text-neutral-700 text-sm capitalize text-nowrap"
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
    name: "tailwind",
    title: "Tailwind CSS",
    url: "/assets/images/tools/tailwind.png",
  },
  {
    name: "javascript",
    title: "JavaScript",
    url: "/assets/images/tools/javascript.png",
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
