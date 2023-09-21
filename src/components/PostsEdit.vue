<template>
    <div class="col-full">
        <form @submit.prevent="save">
            <div class="form-group">
                <textarea v-model="postText" name="" id="" cols="30" rows="10" class="form-input" />
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const postText = ref('')

const emit = defineEmits(['save'])

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

function save() {
    const postId = '9999' + Math.random()
    const post = {
        id: postId,
        text: postText.value,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: props.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
    }
    handleSubmit(post)
    postText.value = ''
}

const handleSubmit = ( (post) => {
    emit('save', post)
})
</script>