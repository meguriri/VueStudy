<template>
     <h1>StackBar Chart</h1>
     <svg id="stackBar"></svg>
     <div id="show" class="border" style="font-size: 12px;">
        
     </div>
</template>

<script setup>
    import { getStackBarData } from '@/api/api';
    import { onMounted ,ref} from 'vue'
    import * as d3 from 'd3'
    import { stackBarInit } from './stackBar';
    const data = ref({})
    let svg = null
    let show = null

    async function fetchData() {
        const res = await getStackBarData()
        data.value = res.data.data
    }
    
    onMounted(async()=>{
        await fetchData()
        svg = d3.select('#stackBar')
        show = d3.select('#show')
        stackBarInit(svg,data.value,show)
    })
</script>