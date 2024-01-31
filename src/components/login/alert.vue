<template>
  <div id="alert">
    <div class="w-50 alert mx-auto alert-dismissible fade show" :class="[classType]"  role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>
        {{ props.message }}
      </strong>
    </div>
  </div>
</template>

<script setup>
  import {computed} from 'vue'
  let props=defineProps(['type','message'])
  let classType = computed(()=>{
    if(props.type==1){
      return 'alert-primary'
    }else if(props.type==2){
      return 'alert-info'
    }else if(props.type==3){
      return 'alert-danger'
    }
  })
</script>