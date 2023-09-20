<template>
    <div class="col-large push-top " style="color: black;">
        <div>

            <h1>{{ thread.title }}</h1>

            <div class="post-list">
                <div class="post" v-for="postId in thread.posts" :key="postId">
                    <div class="user-info">
                        <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

                        <a href="#">
                            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
                        </a>

                        <p class="desktop-only text-small">107 posts</p>
                    </div>
                    <div class="post-content">
                        <div>
                            <p>
                                {{ postById(postId).text }}
                            </p>

                        </div>
                    </div>
                    <div class="post-date text-faded">
                        {{ postById(postId).publishedAt }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, reactive } from 'vue';

const {
    threads,
    posts,
    users
} = reactive(sourceData)

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const thread = computed(() => threads.find(thread => thread.id === props.id))

function postById(postId) {
    return posts.find(p => p.id === postId)
}

function userById(userId) {
    return users.find(u => u.id === userId)
}

</script>

<style scoped></style>