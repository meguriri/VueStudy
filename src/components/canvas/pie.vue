<template>
  <svg id="pieSvg" class="ms-2"></svg>
  <div class="row mt-4" style="text-align: center;font-size: 10px;">
    <p v-for="d in data">name: {{ d.name }},value: {{ d.value }}  </p>
  </div>
</template>

<script setup>
    import {ref, watch,onBeforeUnmount, onMounted} from 'vue'
    import { getPieData } from '@/api/api';
    import * as d3 from 'd3'
    import { pieInit ,pieUpdate} from './utils/pie'

    const data = ref([])
    const intervalTime = 5000
    let svg =null
    let timer = null 

    async function fetchData(){
        const res = await getPieData()
        data.value=res.data.data
        data.value.forEach(d=>{
            d.date=new Date(d.date)
        })
    }   
   
    watch(data,(newD)=>{
        if (svg){
            pieUpdate(newD)
        }
    })

    onMounted(async ()=>{
        await fetchData()
        if (!svg){
            svg = d3.select('#pieSvg')
            pieInit(svg,data.value)
        }
        timer = setInterval(fetchData,intervalTime)
    })

    onBeforeUnmount(()=>{
        clearInterval(timer)
    })
</script>