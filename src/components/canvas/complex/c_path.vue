<template>
    <h2>Complex PathChart</h2>
    <h3>{{ c1 }}</h3>
    <h3>{{ c2 }}</h3>
    <svg id="complexPath"></svg>
    <ul v-for="dd in data">
      <label><h1>{{ dd.name }}</h1></label>
      <li v-for="d in dd.data"><h3>
        date: {{ d.date }},goal: {{ d.goal }}
      </h3></li>
    </ul>
</template>


<script setup>
  import { useRoute } from 'vue-router';
  import { onMounted,ref } from 'vue';
  import { getComplexPathData } from '@/api/api';
  import * as d3 from 'd3'
  import { pathInit } from './c_path';
  const router =useRoute()
  const data = ref([])
  const c1 =ref(router.params.choose1)
  const c2 =ref(router.params.choose2)

  let svg = null

  async function fechData(c1,c2){
    const res = await getComplexPathData(c1,c2)
    console.log('res',res.data)
    data.value = res.data.data
  }

  onMounted(async()=>{
      await fechData(c1.value,c2.value)
      svg = d3.select('#complexPath')
      console.log(data.value)
      pathInit(svg,data.value)
  })

</script>