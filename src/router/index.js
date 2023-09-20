import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/PageHome.vue')
        },
        {
            path: '/thread/:id',
            name: 'ThreadShow',
            component: () => import('@/components/PageThreadShow.vue'),
            props: true
        },
    ]
})

export default router
