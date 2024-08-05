import { defineStore } from "pinia"
import { ref } from "vue"

const useUserStore = defineStore('user',()=>{
    const username= ref('admin')
    const gender = ref('male')
    const isLogin = ref(false)

    function updateUserInfo(name,_isLogin){
        username.value=name
        isLogin.value=_isLogin
    }

    function updateGender(gender){
        gender.value=gender
    }

    return {
        username,
        gender,
        isLogin,
        updateUserInfo,
        updateGender,
    }
},{
    persist: {
        storage: sessionStorage,
    },
})

export default useUserStore