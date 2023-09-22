<template>
    <h1>{{ category.name }}</h1>
    <forum-list 
        :title="category.name"
        :forums="getForumsCategory(category)"
    />
</template>

<script setup>
import ForumList from '@/components/ForumList.vue'
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const category = computed(() => globalStore.sourceData.categories.find(category => category.id === props.id))


function getForumsCategory(category) {
    return globalStore.sourceData.forums.filter(forum => forum.categoryId === category.id)
}
</script>