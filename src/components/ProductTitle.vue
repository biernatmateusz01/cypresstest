<template>
  <h3>{{ title }}</h3>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ title: string }>()
</script>
Ï
