<template>
    <alret :type="alretType" :message="message"/>
    <former @submit="callback"/>
</template>

<script setup>
    import alret from "./alert.vue"
    import former from "./former.vue"
    import {ref} from "vue"
    let alretType =ref(0)
    let message =ref('')
    function callback(res){
        console.log("login",res)
        alretType.value=res.type
        message.value=res.msg
    }
</script>