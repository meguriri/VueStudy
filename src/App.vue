<template>
  <main>
    <navibar></navibar>
    <div class="pt-4 pb-5"></div>
     <!-- <container></container>
     <run-model></run-model> -->
     <!-- <scatterPlot></scatterPlot> -->
     <!-- <force></force> -->
     <!-- <bar></bar> -->
      <pathh></pathh>
  </main>
</template>

<script setup>
  import container from '@/components/container.vue'
  import navibar  from '@/components/navibar.vue'
  import force from './components/canvas/force.vue'
  import scatterPlot from './components/canvas/scatterPlot.vue'
  import runModel from './components/runModel.vue'
  import pathh from '@/components/canvas/path.vue'
  import bar from '@/components/canvas/bar.vue'
  import pie from '@/components/canvas/pie.vue'
</script>

<style>
  main{
    background-color: rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
  }
</style>