<template>
    <div class="forum-list">

        <h2 class="list-title">
            <router-link v-if="categoryId" :to="{name: 'Category', params: {id: categoryId}}">{{ title }}</router-link>
            <span v-else>{{ title }}</span>
        </h2>

        <div 
            v-for="forum in forums"
            :key="forum.id"
            class="forum-listing"
        >
            <div class="forum-details">
                <router-link
                    :to="{name: 'Forum', params: {id: forum.id}}"
                >
                    {{ forum.name }}
                </router-link>
                <p>{{ forum.description }}</p>
            </div>

            <div class="threads-count">
                <p>
                    <span class="count">{{ forum.threads?.length }}</span> 
                    {{ parsedThreadsLenght(forum)}}
                </p>
            </div>

            <div class="last-thread">
               
            </div>
        </div>

    </div>
</template>

<script setup>

const props = defineProps({
    forums: {
        required: true,
        type: Array
    },
    title: {
        type: String,
        default: 'Forum'
    },
    categoryId: {
        required: false,
        type: String
    }
})

function parsedThreadsLenght(forum) {
    if(forum?.threads){
        return forum.threads?.length > 1 ? 'thread' : 'threads'
    }
    return 'no threads'
}
</script>