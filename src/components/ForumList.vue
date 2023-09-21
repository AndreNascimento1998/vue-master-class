export <template>
    <div class="forum-list">

        <h2 class="list-title">
            <a href="#">Forums</a>
        </h2>

        <div 
            v-for="forum in forums"
            :key="forum.id"
            class="forum-listing"
        >
            <div class="forum-details">
                <router-link 
                    class="text-xlarge" 
                    href="forum.html"
                    :to="{name: 'Forum', params: {id: forum.id}}"
                >
                    {{ forum.name }}
                </router-link>
                <p>{{ forum.description }}</p>
            </div>

            <div class="threads-count">
                <p>
                    <span class="count">{{ forum.threads?.length }}</span> 
                    {{ forum.threads?.length > 1 ? 'thread' : 'threads'}}
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
    }
})
</script>