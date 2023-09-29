<template>
    <the-navbar />
    <div>
        <router-view />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';

</script>

<style>
@import "public/style.css";
</style>

