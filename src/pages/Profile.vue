<template>
    <div class="container">
        <div class="flex-grid">
            <div class="col-3 push-top">

                <div class="profile-card">

                    <p class="text-center">
                        <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge">
                    </p>

                    <h1 class="title">{{ user.username }}</h1>

                    <p class="text-lead">{{ user.name }}</p>

                    <p class="text-justify">
                        {{ user.bio || 'No bio specifed' }}
                    </p>

                    <span class="online">{{ user.username }} is online</span>


                    <div class="stats">
                        <span>{{ userPostsCount }} posts</span>
                        <span>{{ userThreadsCount }} threads</span>
                    </div>

                    <hr>

                    <p v-if="user.website" class="text-large text-center">
                        <i class="fa fa-globe"></i>
                        <a :href="user.website">{{ user.website }}</a>
                    </p>

                </div>

                <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

                <div class="text-center">
                    <hr>
                    <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
                </div>

            </div>

            <div class="col-7 push-top">

                <div class="profile-header">
                    <span class="text-lead">
                        {{ user.username }} recent activity
                    </span>
                    <a href="#">See only started threads?</a>
                </div>
                <hr>
                ------
                <post-list :posts="userPosts" />
                -----
            </div>
        </div>
    </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue'
import {useGlobalStore} from '@/stores/GlobalStore.js'
import { computed, reactive } from 'vue';
import sourceData from '@/data.json'

const globalStore = useGlobalStore()
const user = reactive(globalStore.authUser())
const userp = reactive(sourceData.posts)
const usert = reactive(sourceData.threads)


const userPosts = computed(() => userp.filter(post => post.userId === user.id))

const userPostsCount = computed(() => userPosts.value.length)

const userThreads = computed(() => usert.filter(thread => thread.userId === user.id))

const userThreadsCount = computed(() => userThreads.value.length)
</script>