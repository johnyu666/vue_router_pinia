<template>
    <button @click="add">子组件</button>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import { useStore } from "@/stores/UserStore";
const store=useStore()

function add(){
    store.addUser({name:Math.random()})
}
</script>