<template>
    <div class="col-large push-top " style="color: black;">
        <div>
            <h1>{{ thread.title }}</h1>
            <post-list :posts="threadPosts" />
            <posts-edit @save="addPost" :id="props.id" />
        </div>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, reactive, ref } from 'vue';
import PostList from '@/components/PostList.vue';
import PostsEdit from '../components/PostsEdit.vue';

const {
    threads,
    posts
} = reactive(sourceData)

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const thread = computed(() => threads.find(thread => thread.id === props.id))

const threadPosts = computed(() => posts.filter(post => post.threadId === props.id))

function addPost(eventData) {
    posts.push(eventData)
    thread.value.posts.push(eventData.id)
}

</script>

<style scoped></style>