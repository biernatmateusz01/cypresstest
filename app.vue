<template>
  <div ref="page">
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
