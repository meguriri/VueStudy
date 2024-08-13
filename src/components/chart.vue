<template>
    <div>
        <h1 class="text-center">chart</h1>
    </div>
    <div class="row"  style="text-align: center;">
        <div class="col-8 offset-2">
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router';
</script>