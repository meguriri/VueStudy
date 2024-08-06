<template>
    <div class="row mb-3" >
        <div class="col-auto mx-0 px-0 form-label" >
            <span style="font-size: 12px;"><b>#cluster:</b></span>
        </div>
        <div class="col-6">
            <div class="btn-group" role="group" >
                <button @click="minus" type="button" class="btn btn-light btn-sm">
                    <span><i class="bi bi-dash"></i></span>
                </button>
                <button type="button" class="btn btn-outline-secondory btn-sm " style="background-color: white;">&nbsp;{{ cluster }}&nbsp;</button>
                <button @click="plus" type="button" class="btn btn-light btn-sm">
                    <span><i class="bi bi-plus"></i></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const cluster = ref(4)
    const isDisable = ref(false)
    function minus(){
        if (cluster.value>0){
            cluster.value--
        }else{
            isDisable.value=true
        }
    }
    function plus(){
        if (cluster.value==0){
            isDisable.value=false
        }
        cluster.value++
    }
</script>

<style>

</style>