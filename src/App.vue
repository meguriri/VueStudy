<template>
  <HelloWorld/>
  <p :class="Pclass">
    {{ msg }}
  </p>
  <p :id="Pid">
    {{ msg }}
  </p>
</template>

<script setup>
  import {ref} from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  const Pclass =ref('p1')
  const Pid =ref('id1')
  const msg = ref('vue is so difficult')
</script>

<style>
  .p1{
    color: aquamarine;
  }
  #id1{
    color: brown;
  }
</style>

