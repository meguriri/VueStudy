<template>
  <main>
    <navibar></navibar>
    <div class="pt-4 pb-5"></div>
     <container></container>
  </main>
</template>

<script setup>
  import container from '@/components/container.vue'
  import navibar  from '@/components/navibar.vue'
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