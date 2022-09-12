<template>
  <button @click="add">add</button>
    <ul>
      <li v-for="u of store.users">{{u.name}}</li>
    </ul>
    <sapn>{{store.count}}</sapn>
    <hr>
    <Child1/>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import { useStore } from "./stores/UserStore";
import Child1 from "./components/Child1.vue";
let store=useStore()

function add(){
  let user={name:Math.random()}
  store.addUser(user)
}
</script>