<template>
    <h1>Welcome to the forum</h1>
    <forum-list :forums="forums" />
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue';
import ForumList from '../components/ForumList.vue';


const { forums } = reactive(sourceData)

</script>

<style scoped></style>