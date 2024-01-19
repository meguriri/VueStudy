<template>
    <ul>
        <li class=" text-3xl text-green-300" v-for="(item,index) in items" :key="item.id">
           {{ index }}
           <span v-for="(val,key,index) in item">{{ index }}:{{ key }}:{{ val }}<br></span>
        </li>
    </ul>
</template>

<script setup>
    import {ref,reactive} from 'vue'
    const items=ref([
        {
            name:'peter',
            age:18,
            gender:'male',
        },
        {
            name:'jim',
            age:20,
            gender:'male',
        },
        {
            name:'marry',
            age:15,
            gender:'female',
        },
    ])
</script>