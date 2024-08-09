import { createRouter,createWebHistory } from "vue-router"

const routes = [
    {path: '/',component:()=>import('@/components/container.vue')},
    {
        path:'/chart', 
        component:()=>import('@/components/chart.vue'),
        children:[
            {path:'bar',component:()=>import('@/components/canvas/bar.vue')},
            {path:'path',component:()=>import('@/components/canvas/path.vue')},
            {path:'pie',component:()=>import('@/components/canvas/pie.vue')},
            {path:'scatter',component:()=>import('@/components/canvas/scatter.vue')},
            {path:'force',component:()=>import('@/components/canvas/force.vue')},
        ]
    },
]

const router =createRouter({
    history: createWebHistory(),
    routes,
})

export default router