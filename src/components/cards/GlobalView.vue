<template>
    <div class="card">
        <div class="border-0 card-header pb-1" style="background-color: rgba(230,233,241,0.7);">
            <div class="row">
                <div class="col-2">
                    <span><b>Global View</b></span>
                </div>
                <div class="col-3">
                    <selectMini :label="select1.label"
                    :selects="select1.selectOption"
                    :options="select1.options"
                    ></selectMini>
                </div>
                <div class="offset-1 col-3">
                    <button type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-search"></i></span>
                    </button>
                    <button type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-pencil-square"></i></span>
                    </button>
                    <button type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-plus-lg"></i></span>
                    </button>
                </div>
                <div class="col-3">
                    <selectMini :label="select2.label"
                    :selects="select2.selectOption"
                    :options="select2.options"
                    ></selectMini>
                </div>
            </div>
           
        </div>
        <div class="card-body">
            <p><b>globarView test</b></p>
        </div>
    </div>
</template>

<script setup>
    import selectMini from '../select/selectMini.vue'
    import {reactive} from 'vue'
    const select1= reactive({
        label: 'Projection:',
        selectOption: 'Original',
        options: [
            'Original',
            'Relation',
            'Correctness',
            'Original x Transformed',
            'Relation x Transformed',
            'Correctness x Transformed',
        ],
    })
    const select2= reactive({
        label: 'Colors:',
        selectOption: 'Relation',
        options: [
            'Relation',
            'Correctness',
        ],
    })
</script>

<style>

</style>