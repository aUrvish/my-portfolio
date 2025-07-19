<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
onBeforeMount(() => {
  const img = new Image()
  img.src = getImageUrl('/assets/images/noise.png');
  img.onload = () => {
    console.log("image loaded");
    document.documentElement.classList.add('loaded')
  }
})
</script>