<template>
    <div class="post-list">
        <div class="post" v-for="post in props.posts" :key="post.id">
            <div class="user-info">
                <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

                <a href="#">
                    <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
                </a>
                <p class="desktop-only text-small">107 posts</p>
            </div>
            <div class="post-content">
                <div>
                    <p>
                        {{ post.text }}
                    </p>

                </div>
            </div>
            <div class="post-date text-faded" title="Date my friend">
                {{ post.publishedAt }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()
const users = computed(() => globalStore.sourceData.users)

const props = defineProps({
    posts: {
        required: true,
        type: Array
    }
})

function userById(userId) {
    return users.value.find(u => u.id === userId)
}
</script>