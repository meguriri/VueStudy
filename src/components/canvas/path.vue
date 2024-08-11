<template>
    <svg id="pathSvg" class="ms-2" ></svg>
    <div class="row mt-4" style="text-align: center;font-size: 10px;">
        <p v-for="d in data">{{ d.date }}, {{ d.value}}</p>
    </div>
</template>

<script setup>
    import {ref, watch,onBeforeUnmount, onMounted} from 'vue'
    import * as d3 from 'd3'
    import { pathInit ,pathUpdate} from './utils/path'
    import { getPathData } from '@/api/api';
    
    const data = ref([])
    const intervalTime = 5000
    let svg = null 
    let timer = null

    async function fechData(){
        const res = await getPathData()
        data.value=res.data.data
        data.value.forEach(d=>{
            d.date=new Date(d.date)
        })
    }
    
    watch(data,(newD)=>{
        if(svg){
            pathUpdate(newD)
        }
    })

    onMounted(async ()=>{
        await fechData()
        if (!svg){
            svg = d3.select('#pathSvg')
            pathInit(svg,data.value)
        }
        timer = setInterval(fechData,intervalTime)
    })

    onBeforeUnmount(()=>{
        clearInterval(timer)
    })
</script>