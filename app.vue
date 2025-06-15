<template>
  <div ref="page">
    <nav class="h-14 w-full bg-orange-600" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const page = ref<HTMLElement | null>(null);

onMounted(() => {
  console.log('page wrapper:', page.value);
});
</script>
