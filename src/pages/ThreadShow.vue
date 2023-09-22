<template>
    <div class="col-large push-top" style="color: black">
        <div>
            <h1>{{ thread.title }}</h1>
            <post-list :posts="threadPosts" />
            <posts-edit @save="addPost" :id="props.id" />
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
import PostList from "@/components/PostList.vue"
import PostsEdit from "../components/PostsEdit.vue"
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const thread = computed(() => globalStore.sourceData.threads.find((thread) => thread.id === props.id))

const threadPosts = computed(() => globalStore.sourceData.posts.filter((post) => post.threadId === props.id))

function addPost(eventData) {
    globalStore.sourceData.posts.push(eventData)
    thread.value.posts.push(eventData.id)
}
</script>

<style scoped></style>
