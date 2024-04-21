<template >
  <!-- <login/> -->
  <div class="mb-4">
    <el-button @click="fic" :icon="Edit">Default</el-button>
    <el-button >Primary</el-button>
    <el-button type="success" :loading="ll" round>Success</el-button>
    <el-button type="info"  circle>Info</el-button>
    <el-button type="warning" size="small">Warning</el-button>
    <el-button color="#626aef"  size="large">Danger</el-button>
  </div>
  <div >
    1111
  </div>
</template>

<script setup>
  import login from "./components/login/login.vue"
  import {Edit} from '@element-plus/icons-vue'
  import {ref} from 'vue'
  let ll =ref(false)
  function fic(){
    ll.value=!ll.value
    console.log(ll.value)
  }
</script>

