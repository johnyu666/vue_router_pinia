import { defineStore } from "pinia";

export const useStore=defineStore("users",{
    state(){
        return {users:[{id:1,name:'john'},{id:23,name:"tom"}]}
    },
    getters:{
        count(state){
            return state.users.length;
        }
    },
    actions:{
        addUser(user){
            this.users.push(user)
        }
    }
})