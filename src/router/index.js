import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/Home.vue')
        },
        {
            path: '/category/:id',
            name: 'Category',
            component: () => import('@/pages/Category.vue'),
            props: true
        },
        {
            path: '/forum/:id',
            name: 'Forum',
            component: () => import('@/pages/Forum.vue'),
            props: true
        },
        {
            path: '/thread/:id',
            name: 'ThreadShow',
            component: () => import('@/pages/ThreadShow.vue'),
            props: true,
            beforeEnter(to, from, next) {
                const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id)
                if (threadExists) {
                    return next()
                } else {
                    next({
                        name: 'NotFound',
                        params: { pathMatch: to.path.substring(1).split('/') },
                        query: to.query,
                        hash: to.hash
                    })
                }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/pages/NotFound.vue')
        }
    ]
})

export default router
