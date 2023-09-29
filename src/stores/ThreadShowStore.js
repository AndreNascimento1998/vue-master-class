

import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '@/data.json'

export const useGlobalStore = defineStore('global', () => {
    const sourceData = ref(data)

    function createPost(post) {
        globalStore.sourceData.posts.push(eventData)
        thread.value.posts.push(eventData.id)
    }

    return {
        sourceData,
    }
})