<template>
    <div class="row">
        <div class="col-auto offset-4">
            <svg></svg>
        </div>
    </div>
</template>

<script setup>
    import * as d3 from 'd3'
    import { barInit, barUpdate } from './utils/bar';
    import {watch,ref, onBeforeUnmount } from 'vue'
    import axios from 'axios';
    const data =ref([])
    let isStart=0
    function getD(){
        console.log('getD start..')
        axios.get('http://127.0.0.1:5002/data/bar')
        .then(res=>{
            data.value=res.data.data
        })
    }
    getD()
    const timer=setInterval(getD,5000)
    watch(data,(newD)=>{
        console.log('data is change!')
        let svg=d3.select('svg')
        if(isStart==0){
            console.log('init')
            barInit(svg,newD)
            isStart=1
        }else{
            console.log('update')
            barUpdate(svg,newD)
        }
    })
    onBeforeUnmount(()=>{
        console.log('components is UnMount')
        clearInterval(timer)
    })
</script>