<template>
  <main class="form-signin my-5 col-4 offset-4">
        <form id="form1">
            <h1 class="display-3 my-5 ">小清单</h1>
            
            <div class="form-floating">
                <input v-model.trim="name" name="name" type="text" class="form-control" id="floatingInput" >
                <label for="floatingInput">用户名</label>
            </div>
            <div class="form-floating">
                <input v-model.trim="password" name="password" type="password" class="form-control" id="floatingPassword" >
                <label for="floatingPassword">密码</label>
            </div>
            <div v-show="check" id="checkform" class="form-floating">
                <input v-model.trim="checkpassword" name="checkpassword" type="password" class=" form-control" id="floatingcheckPassword" >
                <label for="floatingPassword">确认密码</label>
            </div>
            <div class="mt-2 mb-5">
                <div class="form-check form-check-inline">
                <input  v-model="radio" class="form-check-input" type="radio" name="inlineRadioOptions"  id="loginradio" value="login">
                <label class="form-check-label" for="login">登录</label>
                </div>
                <div class="form-check form-check-inline">
                <input v-model="radio" class="form-check-input" type="radio" name="inlineRadioOptions"  id="signradio" value="sign">
                <label class="form-check-label" for="sign">注册</label>
                </div>
            </div>
            <div class="row-cols-auto">
                <button v-show="!check"  @click="login" id="login" class="col-5 mx-lg-2 btn btn-lg btn-primary" type="button">登录</button>
                <button v-show="check" @click="sign" id="sign" class="col-5 mx-lg-3 btn btn-lg btn-info text-white" type="button">注册</button>
            </div>
            <p class="mt-5 mb-3 text-muted">&copy; meguriri 2021</p>
        </form>
    </main>
</template>

<script setup>
    import {computed, ref} from "vue"
    import axios from 'axios';
    
    let name = ref('')
    let password = ref('')
    let checkpassword = ref('')
    let radio = ref('')
    let check =computed(()=>{
        if(radio.value==='login'){
            return false
        }
        return true
    })
    const emit = defineEmits({})
    function login(){
        console.log('login...',name.value,password.value)
        let user={
            name:name.value,
            password:password.value
        }
        console.log("user",user)
        axios({
            method:'post',
            url:'http://localhost:8090/login',
            data:user
        }).then(res=>{
            console.log(res.data)
            emit('submit',res.data)
        })
    }
    function sign(){
        console.log('sign...',name.value,password.value,checkpassword.value)
    }
</script>