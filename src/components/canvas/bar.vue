<template>
    <svg id="barSvg" class="ms-2"></svg>
    <div class="row mt-4" style="text-align: center;font-size: 10px;">
        <p v-for="d in data">name: {{ d.name }},value: {{ d.value }}  </p>
    </div>
</template>

<script setup>
    import * as d3 from 'd3'
    import { barInit, barUpdate } from './utils/bar'
    import {watch,ref, onBeforeUnmount, onMounted } from 'vue'
    import { getBarData } from '@/api/api'

    const data =ref([])
    const intervalTime = 5000
    let svg = null
    let timer = null

    async function fetchData(){
        const res = await getBarData()
        data.value=res.data.data
    }
    
    watch(data,(newD)=>{
        if(svg){
            barUpdate(newD)
        }
    })

    onMounted(async ()=>{
        await fetchData()
        if (!svg){
            svg = d3.select('#barSvg')
            barInit(svg,data.value)
        }
        timer = setInterval(fetchData,intervalTime) 
    })
    
    onBeforeUnmount(()=>{
        clearInterval(timer)
    })
</script>