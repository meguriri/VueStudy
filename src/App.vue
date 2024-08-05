<template>
  <main>
    <navibar></navibar>
    <div class="p-5"></div>
    <!-- <container :idx="i" v-for="i in 10"></container> -->
    <!-- <bar></bar> -->
    <pathh></pathh>
  </main>
</template>

<script setup>
  // import axiosTest from './components/axiosTest.vue';
  import container from '@/components/container.vue'
  import navibar  from '@/components/navibar.vue'
  import pathh from '@/components/canvas/path.vue'
  import bar from '@/components/canvas/bar.vue'
</script>

<style>
  main{
    background-color: aliceblue;
  }
</style>