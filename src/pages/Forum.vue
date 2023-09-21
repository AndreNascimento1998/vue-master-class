<template>
    <div class="forum-header">
        <div class="forum-details">
            <h1>{{ forum.name }}</h1>
            <p class="text-lead">{{ forum.description    }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>


    <div class="col-full push-top">
        <thread-list :threads="threads" />
    </div>
</template>

<script setup>
import ThreadList from '@/components/ThreadList.vue';
import sourceData from '@/data.json'
import { computed } from 'vue';

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const forum = computed(() => sourceData.forums.find(forum => forum.id === props.id))

const threads = computed(() => sourceData.threads.filter(thread => thread.forumId === props.id))
</script>