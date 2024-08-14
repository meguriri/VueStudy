import Chart from "@/components/chart.vue"
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
    {
        path:'/complex', 
        component:()=>import('@/components/chart.vue'),
        children:[
            {path:'path/:choose1/:choose2',component:()=>import('@/components/canvas/complex/c_path.vue')},
            {path:'bar/stack',component:()=>import('@/components/canvas/complex/stackBar.vue')},
        ]
    },
]

const router =createRouter({
    history: createWebHistory(),
    routes,
})

//路由守卫
router.beforeEach((to,from)=>{
    console.log("from: ",from)
    console.log("to: ",to)
})

export default router