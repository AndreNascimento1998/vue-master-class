<template>
    <div class="col-full">

        <div class="thread-list">

            <h2 class="list-title">Threads</h2>

            <div v-for="thread in threads" :key="threads.id" class="thread">
                <div>
                    <p>
                        <router-link 
                            :to="{name: 'ThreadShow', params: {id: thread.id}}">
                                {{ thread.title }}
                        </router-link>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="#">{{ userById(thread.userId).name }}</a>, {{ thread.publisedhAt }}
                    </p>
                </div>

                <div class="activity">
                    <p class="replies-count">
                        {{ thread.posts.length }}
                    </p>

                    <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

                    <div>
                        <p class="text-xsmall">
                            <a href="profile.html">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded"> {{ thread.publisedhAt }}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useGlobalStore } from '@/stores/GlobalStore.js'

const globalStore = useGlobalStore()

const props = defineProps({
    threads: {
        required: true
    }
})

const users = computed(() => globalStore.sourceData.users)

function userById(userId) {
    return users.value.find(u => u.id === userId)
}

</script>

<style scoped></style>