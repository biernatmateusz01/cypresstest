<template>
  <div>
    <h2>Koszyk</h2>
    <ul>
      <li v-for="item in items" :key="item.id" data-test="cart-item">
        {{ item.name }} - {{ item.quantity }}
        <button @click="remove(item.id)">Usuń</button>
      </li>
    </ul>
    <p data-test="total">Łącznie: {{ totalItems }} produktów</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Item {
  id: number
  name: string
  quantity: number
}

const items = ref<Item[]>([
  { id: 1, name: 'Jabłko', quantity: 2 },
  { id: 2, name: 'Pomarańcza', quantity: 3 },
])

const totalItems = computed(() =>
  items.value.reduce((sum, item) => sum + item.quantity, 0)
)

function remove(id: number) {
  items.value = items.value.filter(item => item.id !== id)
}
</script>
