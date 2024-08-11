<template>
    <div class="card">
        <div class="border-0 card-header pb-0 mb-0" style="background-color: rgba(230,233,241,0.7);">
            <div class="row">
                <div class="col-2 mt-1">
                    <span><b>Subset View</b></span>
                </div>
                <div class="col-2 offset-8">
                    <selectNum></selectNum>
                </div>
            </div>
        </div>
        <div class="card-body overflow-auto">
            <p><b>subset test</b></p>
            <!-- test -->
            <div class="row" id="chart">
                <div class="col-6 overflow-auto"> 
                    <pie></pie>
                </div>
                <div class="col-6 overflow-auto"> 
                    <scatter></scatter>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>

<script setup>
    import pie from '../canvas/pie.vue'
    import scatter from '../canvas/scatter.vue'
    import selectNum from '../select/selectNum.vue'
</script>

<style>
    #chart{
        overflow-x: scroll;
    }
</style>