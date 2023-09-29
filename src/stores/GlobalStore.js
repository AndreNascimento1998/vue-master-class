import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '@/data.json'

export const useGlobalStore = defineStore('global', () => {
    const sourceData = ref(data)

    function createPost(post,threadId) {
        const postId = '9999' + Math.random()
        post.id = postId
        sourceData.value.posts.push(post)
        const thread = sourceData.value.threads.find((thread) => thread.id === threadId.id)
        thread.posts.push(post.id)
    }

    return {
        sourceData,
        createPost
    }
})