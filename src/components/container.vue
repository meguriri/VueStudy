<template>
    <div >
      <div class="row mx-1">
        <div class="col-8 me-0 px-1">
          <div class="mb-1" >
            <GlobalView style="height: 45vh;"></GlobalView>
          </div>
          <div>
            <Subset style="height: 45vh;"></Subset>
          </div>
        </div>
        <div class="col-4 ms-0 px-1">
          <InstanceView style="height: 90vh;"></InstanceView>
        </div>
      </div>
    </div>
</template>
<script setup>
    import GlobalView from './cards/GlobalView.vue';
    import Subset from './cards/Subset.vue';
    import InstanceView from './cards/InstanceView.vue';
    import { defineProps } from 'vue';
    defineProps(['idx'])
</script>