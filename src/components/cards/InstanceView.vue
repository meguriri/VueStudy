<template>
    <div class="card">
        <div class="border-0 card-header" style="background-color: rgba(230,233,241,0.7);">
            <span><b>Instance View</b></span>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="input-group mt-0 mb-3">
                    <span class="input-group-text text-secondary">
                        <small>search:</small>
                    </span>
                    <input type="text" class="form-control">
                    <span class="input-group-text text-secondary">
                        <i class="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div class="row mt-3 pb-2">
                 <div class="col-auto me-4 text-secondary " style="font-size: 15px;">
                    Accuracy
                 </div>
                 <div class="col-auto">
                    
                 </div>
            </div>
            <div class="row mt-2 pb-5">
                <div class="col-auto me-4 text-secondary" style="font-size: 15px;">
                    Avg QC Hit
                 </div>
                 <div class="col-auto">
                    
                 </div>
            </div>
            <div class="row mt-2 pb-5">
                <div class="col-3 me-4 text-secondary" style="font-size: 15px;">
                    Model Concept Frequency
                 </div>
                 <div class="col-auto">
                    
                 </div>
            </div>
            <div class="row mt-3">
                <question></question>
            </div>
        </div>
    </div>
</template>

<script setup>
    import question from '../select/question.vue';
</script>

<style>

</style>