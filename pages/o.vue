<template>
    <div class="container mx-auto block py-4">
        <BundlesItem @clicked="markAsCurrent(item)" v-for="item in bundlesData" :key="item.id" />
    </div>
    current: {{chosedBundles}}
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BundlesItem from '../src/components/BundlesItem.vue'

interface IBundels {
    id: number,
    name: string,
    price: number,
    features: string[]
}
const chosedBundles = ref<null | IBundels>(null)


const bundlesData: IBundels[] = [
    {
        id: 1,
        name: "Basic Plan",
        price: 19.99,
        features: ["1 website", "10 GB storage", "Email support"]
    },
    {
        id: 2,
        name: "Standard Plan",
        price: 49.99,
        features: ["10 websites", "100 GB storage", "Priority support"]
    },
    {
        id: 3,
        name: "Premium Plan",
        price: 99.99,
        features: ["Unlimited websites", "1 TB storage", "24/7 support", "Dedicated account manager"]
    }
];

onMounted(() => {
    chosedBundles.value = bundlesData[0]
})

function markAsCurrent(item: IBundels){
    chosedBundles.value = item
    console.log(item)
}

</script>