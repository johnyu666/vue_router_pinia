<template>
    <h1>用户:{{$route.params.id}}</h1>
    <router-link :to="{name:'userHome'}">管理首页</router-link>
    <router-link :to="{name:'userDetail'}">用户详细</router-link>
    <router-link :to="{name:'userSettings'}">用户设置</router-link>
    <hr>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import { ref, onUnmounted, watch } from "vue"
import { useRoute } from "vue-router";


const route = useRoute()
watch(()=>route.params.id,x=>console.log(x),{immediate:true})

</script>