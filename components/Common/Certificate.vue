<template>
  <div class="md:py-32 py-20">
    <div
      class="border-l-[3px] border-blue-500 md:pl-8 pl-4 flex md:gap-4 gap-3 items-center md:py-1.5 py-1"
    >
      <p class="md:text-2xl text-xl font-semibold text-blue-500 capitalize">
        Certificates<span class="dark:text-white text-black">.</span>
      </p>
    </div>
    <div class="md:pl-8 mt-8">
      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 md:gap-y-8 gap-y-4"
      >
        <a
          :href="certificate.url"
          v-for="(certificate, index) in certificates"
          :key="index"
        >
          <img
            :src="getCertificateImageUrl(certificate.image)"
            :alt="certificate.name"
            class="w-full rounded-md dark:border-0 border border-neutral-300 shadow-md"
          />
          <p
            class="dark:text-neutral-300 font-instrument text-sm mt-1.5 underline underline-offset-2 flex items-center gap-0.5"
          >
            {{ certificate.name }} <ArrowUpRight class="w-4" />
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const certificates = ref([
  {
    name: "JavaScript (Intermediate) Certificate",
    image: "/assets/images/certificates/javascript-intermediate.png",
    url: "https://www.hackerrank.com/certificates/eebde7ca04a5",
  },
  {
    name: "Rest API (Intermediate) Certificate",
    image: "/assets/images/certificates/rest-api-intermediate.png",
    url: "https://www.hackerrank.com/certificates/0f9587c14db3",
  },
  {
    name: "JavaScript (Basic) Certificate",
    image: "/assets/images/certificates/javascript-basic.png",
    url: "https://www.hackerrank.com/certificates/eebde7ca04a5",
  },
  {
    name: "SQL (Basic) Certificate",
    image: "/assets/images/certificates/sql-basic.png",
    url: "https://www.hackerrank.com/certificates/ffb98b8913a1",
  },
]);
</script>
