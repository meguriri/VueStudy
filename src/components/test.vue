<template>
    <div v-for="d in data">
        <div class="card m-3 p-2">
            <div class="card-body">
                <div class="card-title"><h4>
                    {{ d.question }}
                </h4></div>
                <div class="card-text">
                    <div v-for="value,key in d.knowl_wikipedia_list">
                        <h5>{{ key }}:</h5>
                        <div v-for="dd in value">
                            <div v-for="ddd,i in dd" >
                                <p v-if="i==0" class="text-primary">{{ ddd }}</p>
                                <p v-else>{{ ddd }}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref,reactive, onMounted} from 'vue'
    import { getTestData } from '@/api/api'
    const data = ref(null)
    onMounted(async ()=>{
        let res = await getTestData()
        data.value = res.data
        console.log(res.data)
    })
</script>