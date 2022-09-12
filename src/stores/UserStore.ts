import { defineStore } from "pinia";
import {ref,computed} from 'vue'
export const useStore=defineStore("users",()=>{
    const users=ref([{id:1,name:'john'},{id:23,name:"tom"}])
    const count=computed(()=>users.value.length)
    function addUser(user){
        users.value.push(user)
    }
    return {users,count,addUser}
})