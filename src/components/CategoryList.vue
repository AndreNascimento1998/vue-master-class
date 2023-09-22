<template>
    <forum-list
        v-for="category in categories"
        :key="category.id"
        :forums="getForumsCategory(category)"
        :title="category.name"
        :categoryId="category.id"
    />
</template>
<script setup>
import ForumList from '@/components/ForumList.vue';
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()
const props = defineProps({
    categories: {
        required: true,
        type: Array
    },
})

function getForumsCategory(category) {
    return globalStore.sourceData.forums.filter(forum => forum.categoryId === category.id)
}
</script>