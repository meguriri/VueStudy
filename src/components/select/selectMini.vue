<template>
    <div class="row px-0 mx-0">
        <div class="col-auto mx-0 px-2 form-label" >
            <span style="font-size: 12px;"><b>{{ label }}</b></span>
        </div>
        <div class="col-8 mx-0 px-0">
            <select @click="emitEvent(choose)"  v-model="choose"  id="pro-sel" class="form-select form-select-sm" style="font-size: 12px;">
                <option   selected>{{ selects }}</option>
                <option   :value="d" v-for="(d,i) in options">{{ d }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import {defineProps,defineEmits,ref} from 'vue'
    defineProps(['label','selects','options'])
    const emit=defineEmits(['choose'])
    const choose = ref('')
    function emitEvent(d){
        emit('choose',d)
    }
</script>