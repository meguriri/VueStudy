<template>
    <div class="row">
        <div class="col-auto">
            <span class="text-secondary" style="font-size: 12px;">
                Total 100
            </span>  
        </div>
        <div class="col-auto">
            <button type="button" :disabled="isDisable1" @click="minus" class="border btn btn-light btn-sm text-secondary">
                <i class="bi bi-caret-left"></i>
            </button>
        </div> 
        <div class="col-1 p-0 m-0">
            <span class="text-secondary" style="font-size: 12px;">
                Go to
            </span>
        </div>
        <div class="col-2 ps-0 ms-0">
            <input v-model="cluster" :placeholder="cluster" class="form-control form-control-sm"/>
        </div>    
        <div class="col-auto">
            <button type="button" :disabled="isDisable2"  @click="plus" class="border btn btn-light btn-sm text-secondary">
                <i class="bi bi-caret-right"></i>
            </button>
        </div>
        <div class="col-auto">
            <button type="button" class="border btn btn-light btn-sm text-secondary">
                <i class="bi bi-bookmarks"></i>
             </button>
        </div>
        <div class="col-auto">
            <button type="button" class="border btn btn-light btn-sm text-secondary">
                <i class="bi bi-save"></i> Save all
            </button>
        </div>           
    </div>
    <div class="row">
        <p class="text-center px-0 mx-0" style="font-size: 15px;">
                Qestion concept - Relations - Correct answer:<br/>
                    <span style="font-size: 18px;">qc - relations - gt</span>
        </p>
    </div>
    <div class="row">
        <ul class="nav">
            <li class="nav-item">
                <a @click="cl1" :style="{color: color1}" class="nav-link" style="font-size: 15px;">
                    <i class="bi bi-eye"></i>
                    Explanation
                </a>
            </li>
            <li class="nav-item">
                <a @click="cl2"  :style="{color: color2}" class="nav-link" style="font-size: 15px;">
                    <i class="bi bi-pencil"></i>
                    Edit
                </a>
            </li>
        </ul>
        <hr/>
    </div>
    <div class="row mb-3">
        <div v-if="isActive">
            <span style="font-size: 20px;">
                qt
            </span>
        </div>
        <div v-else>
            <input type="text" class="form-control" placeholder="q">
        </div>
    </div>
    <div class="row">
        <div v-for="(d,i) in inputData" class="row">
            <label class="me-0 pe-0 col-2 offset-2 col-form-label" for="A">{{ d.label }}</label>
            <div class="col-6 ms-0 ps-0">
                <input v-model="inputData[i].value" style="background-color: rgb(170,170,170)" :id="d.label" type="text" class="form-control form-control-sm" :placeholder="d.value">
            </div>
        </div>
    </div>
</template>

<script setup>
import { lab } from 'd3';
import {ref} from 'vue'
    const cluster = ref(1)
    const isActive = ref(true)
    const color1=ref('#0d6efd')
    const color2=ref('#adb5bd')
    const isDisable1 = ref(false)
    const isDisable2 = ref(false)
    const inputData = ref([
        {label:'A',value:'axwqxqw'},
        {label:'B',value:'bxwqqw'},
        {label:'C',value:'cwwwxwxq'},
        {label:'D',value:'d'},
        {label:'E',value:'e'},
    ])
    function cl1(){
        isActive.value=true
        color1.value='#0d6efd'
        color2.value='#adb5bd'
        console.log(isActive.value)
    }
    function cl2(){
        isActive.value=false
        color1.value='#adb5bd'
        color2.value='#0d6efd'
        console.log(isActive.value)
    }
    function minus(){
        if (cluster.value==100){
            isDisable2.value=false
        }
        if (cluster.value>0){
            cluster.value--
        }else{
            isDisable1.value=true
        }
    }
    function plus(){
        if (cluster.value==0){
            isDisable1.value=false
        }
        if (cluster.value<100){
            cluster.value++
        }else{
            isDisable2.value=true
        }
    }
</script>