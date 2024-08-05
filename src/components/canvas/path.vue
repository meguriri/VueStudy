<template>
    <svg class="ms-5"></svg>
    <h5 v-for="d in data">{{ d.date }}, {{ d.value}}</h5>
</template>

<script setup>
    import {ref, watch} from 'vue'
    import axios  from 'axios';
    import * as d3 from 'd3'
    import { pathInit ,pathUpdate} from './utils/path'
    let isStart=0
    const data = ref([])
    function getD(){
        console.log('getD start..')
        axios.get('http://127.0.0.1:5002/data/path')
        .then(res=>{
            data.value=res.data.data
            data.value.forEach(d=>{
                d.date=new Date(d.date)
            })
            console.log(data.value)
        })
    }
    getD()
    setInterval(getD,5000)
    watch(data,(newD)=>{
        let svg = d3.select('svg') 
        if(isStart==0){
            console.log('init')
            pathInit(svg,newD)
            isStart=1
        }else{
            console.log('update')
            pathUpdate(newD)
        }
    })
</script>