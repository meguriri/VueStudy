<template>
  <svg class="ms-5"></svg>
  <h1 v-for="d in data">name: {{ d.name }},value: {{ d.value }}  </h1>
</template>

<script setup>
  import {ref, watch} from 'vue'
  import axios  from 'axios';
  import * as d3 from 'd3'
  import { pieInit ,pieUpdate} from './utils/pie'
  let isStart=0
  const data = ref([])
  function getD(){
        console.log('getD start..')
        axios.get('http://127.0.0.1:5002/data/pie')
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
            pieInit(svg,newD)
            isStart=1
        }else{
            console.log('update')
            pieUpdate(newD)
        }
    })
</script>