<template>
    <button @click="add"> click {{ count }}</button>
</template>

<script setup>
    import {ref} from 'vue'
    const count =ref(0)
    function add(){
        count.value++
    }
</script>