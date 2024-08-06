<template>
    <div class="row px-0 mx-0">
        <div class="col-auto mx-0 px-2 form-label" >
            <span style="font-size: 12px;"><b>{{ label }}</b></span>
        </div>
        <div class="col-8 mx-0 px-0">
            <select id="pro-sel" class="form-select form-select-sm" style="font-size: 12px;">
                <option selected>{{ selects }}</option>
                <option :value="i+1" v-for="(d,i) in options">{{ d }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    defineProps(['label','selects','options'])
</script>