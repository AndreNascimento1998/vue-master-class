<template>
    <h1>Welcome to the forum</h1>
    <thread-list :threads="threads" />
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from './ThreadList.vue';
import { reactive } from 'vue';


const { threads } = reactive(sourceData)

</script>

<style scoped></style>