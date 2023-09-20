<template>
    <div class="container">
        <span>Hellow from page home</span>
        <div
            v-for="thread in threads"
            :key="threads.id"
        >
            <h2>{{ thread.title }}</h2>
            
            <div
                v-for="postId in thread.posts"
                :key="postId"
            >
                <p>{{ userById(postById(postId).userId).name }}</p>
                <p>{{ postById(postId).text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue';

const {
    threads,
    posts,
    users
    } = reactive(sourceData)

    function postById(postId) {
        return posts.find(p => p.id === postId)
    }

    function userById(userId) {
        return users.find(u => u.id === userId)
    }

</script>

<style scoped></style>