<script setup>
import { useI18n } from 'vue-i18n'

const { locales, setLocale, t } = useI18n()
</script>

<template>
  <div>
    <h1>{{ t('welcome1') }}</h1>
  </div>
  <div>
    <button v-for="locale in locales" :key="locale" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ t('welcome') }}</h1>
  </div>
</template>

<i18n>
{
  "en": {
    "welcome1": "Welcome from local i18n block"
  },
  "pl": {
    "welcome1": "Witamy z lokalnego bloku i18n"
  }
}
</i18n>
