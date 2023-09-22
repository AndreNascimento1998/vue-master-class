import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '@/data.json'

export const useGlobalStore = defineStore('global', () => {
    const sourceData = ref(data)

    return {
        sourceData,
    }
})