<template>
    <h1 class="push-top">Welcome to the forum</h1>
    <category-list :categories="categories" />
</template>

<script setup>
import { computed } from 'vue';
import CategoryList from '../components/CategoryList.vue';
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()

const categories = computed(() => globalStore.sourceData.categories)

</script>

<style scoped></style>