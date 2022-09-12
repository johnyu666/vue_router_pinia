<template>
    <p>{{tip}}</p>
    用户名：<input type="text" v-model="user.name"><br> 
    密码：<input type="text" v-model="user.password"><br> 
    <button @click="login">登录</button>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import { useRoute, useRouter } from "vue-router";
const user=ref({name:'john',password:'123'})
const tip=ref("")
const route=useRoute()
const router=useRouter()
function login(){
    if(user.value.name=="john" && user.value.password=="123"){
        window.isAuth=true;
        //在全局前置守卫中，设置了“上一次请求的route”,登录成功直接转接过去
        router.push(window.prev);
    } 
    else{
        tip.value="用户或密码错"
    }
}
</script>