<template>
    <div class="row">
        <div class="col-auto offset-4">
            <svg></svg>
        </div>
    </div>
    <div class="row mt-4" style="text-align: center;">
        <h5 v-for="d in data">{{ d.date }}, {{ d.value}}</h5>
    </div>
</template>

<script setup>
    import {ref, watch,onBeforeUnmount} from 'vue'
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
    const timer=setInterval(getD,5000)
    
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
    onBeforeUnmount(()=>{
        console.log('components is UnMount')
        clearInterval(timer)
    })
</script>