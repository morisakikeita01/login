import { createRouter, createWebHistory } from 'vue-router'

let routes = [
    {
        path: "/",
        name: "SignIn",
        component: () => import('../views/SignIn.vue')
    },
    {
        path: "/stage",
        name: "Stage",
        component: () => import('../views/Stage.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "404"
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router