import { defineStore } from "pinia";

const store = defineStore(
    'store',{
        state:() =>({token:null}),
        actions:{
            setToken(token){
                this.token = token
            }
        }
    }

)

export default store