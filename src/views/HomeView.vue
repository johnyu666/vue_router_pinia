<template>
  <h1>Home</h1>
</template>
<script lang="ts" setup>
import {ref,onUnmounted} from "vue"

onUnmounted(()=>{
  console.log("home on unmounted...")
})
</script>