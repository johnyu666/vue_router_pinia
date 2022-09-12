<template>
  <router-link to="/">首页</router-link>|
  <router-link to="/users/23">用户管理</router-link>||--
  <router-link :to="{name:'home'}">首页</router-link>|
  <router-link :to="{name:'users',params:{id:25}}">用户管理</router-link>|--
  <button @click="nav('home')">首页</button>
  <button @click="nav('users')">用户管理</button>
  <hr>
  <router-view/>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'
const router = useRouter()
function nav(name) {
  router.push({ name, params: { id: 26 } })
}
</script>