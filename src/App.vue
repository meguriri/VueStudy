<template>
  <HelloWorld/>
  <HelloWorld/>
  <HelloWorld/>
  <HelloWorld/>
  <p :class="Pclass">
    {{ msg }}
  </p>
  <p :id="Pid">
    {{ msg }}
  </p>
  <p :="obj">
    {{ msg }}
  </p>
  <button :disabled="isClick">
    click
  </button>
</template>

<script setup>
  import {ref,reactive} from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  const obj =reactive({
    class: 'p1',
    id: 'id1'
  })
  const isClick = ref(false)
  const Pclass =ref('p1')
  const Pid =ref('id1')
  const msg = ref('vue is so difficult')
  
</script>

<style>
  .p1{
    color: aquamarine;
  }
  #id1{
    background-color:bisque;
  }
</style>

