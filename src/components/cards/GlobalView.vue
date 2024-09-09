<template>
    <div class="card">
        <div class="border-0 card-header pb-1" style="background-color: rgba(230,233,241,0.7);">
            <div class="row">
                <div class="col-2">
                    <span><b>Global View</b></span>
                </div>
                <div class="col-3">
                    <selectMini @choose="(c)=>{choose1=c}" :label="select1.label"
                    :selects="select1.selectOption"
                    :options="select1.options"
                    ></selectMini>
                </div>
                <div class="offset-1 col-3">
                    <button @click="to_c_path" type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-search"></i></span>
                    </button>
                    <button @click="to_stack" type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-pencil-square"></i></span>
                    </button>
                    <button @click="to_test" type="button" class="mx-1 btn btn-light btn-sm text-secondary">
                        <span><i class="bi bi-plus-lg"></i></span>
                    </button>
                </div>
                <div class="col-3">
                    <selectMini @choose="(c)=>{choose2=c}" :label="select2.label"
                    :selects="select2.selectOption"
                    :options="select2.options"
                    ></selectMini>
                </div>
            </div>
           
        </div>
        <div class="card-body overflow-auto">
            <p><b>globarView test</b></p>
            <!-- test -->
            <div class="row" id="chart">
                <div class="col-6 overflow-auto"> 
                    <bar></bar>
                </div>
                <div class="col-6 overflow-auto"> 
                    <pathh></pathh>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>

<script setup>
    import bar from '../canvas/bar.vue';
    import pathh from '../canvas/path.vue';
    import { useRouter } from 'vue-router';
    import selectMini from '../select/selectMini.vue'
    import {reactive,ref} from 'vue'
    
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
    const choose1=ref('')
    const choose2=ref('')
    const router =useRouter()
    function to_c_path(){
        router.push({
            path:`/complex/path/${choose1.value}/${choose2.value}`,
        })
    }

    function to_stack(){
        router.push('/complex/bar/stack')
    }
    function to_test(){
        router.push('/test')
    }
</script>

<style>
    #chart{
        overflow-x: scroll;
    }
</style>