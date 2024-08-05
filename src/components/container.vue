<template>
    <div class="container mb-3">
        <div class="row">
            <div class="bg-success p-5 col-6">
                <test></test>
            </div>
            <div class="bg-danger p-5 col-6">
                <test></test>
            </div>
        </div>
    </div>
</template>
<script setup>
    import test from './canvas/bar.vue';
    import { defineProps } from 'vue';
    defineProps(['idx'])
</script>