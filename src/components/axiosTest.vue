<template>
    <h1 v-for="r in res">{{ r }}</h1>
    <button @click="getData">getData</button>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios';

    const res = ref('')

    function getData(){
        axios.get('http://127.0.0.1:5000/data')
        .then(r=>{
            res.value=r.data.data
        })
    }
</script>