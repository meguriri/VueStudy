<template>
  <main>
    <navibar></navibar>
    <div class="pt-4 pb-5"></div>
    <div class="mt-4 row px-2">
      <button v-for="name in pathName"
       @click="routerFor(name)" 
       type="button" 
       class="border mx-3 col-auto btn btn-light btn-sm">
        {{ name }}
      </button>
    </div>
    <RouterView/>
  </main>
</template>

<script setup>
  import navibar  from '@/components/navibar.vue'
  
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const pathName = ['bar','path','pie','scatter','force']
  function routerFor(chartType){
    router.push(`/chart/${chartType}`)
  }
</script>

<style>
  main{
    background-color: rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
  }
</style>