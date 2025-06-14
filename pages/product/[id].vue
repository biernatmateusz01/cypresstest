<template>
  <div>
    <h3>Nazwa produktu</h3>
    <button @click="addToCart">Dodaj do koszyka</button>
    <p data-test="cart-count">Koszyk ({{ cartCount }})</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cartCount = ref(0);

function addToCart() {
  cartCount.value += 1;
  console.log('dodano do koszyka, nowy stan:', cartCount.value);
}

</script>
