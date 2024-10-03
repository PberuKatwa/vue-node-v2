import { defineStore } from "pinia";


const store = defineStore(
    'store',{
        state:() =>({token:localStorage.getItem('token')}||null),
        actions:{
            setToken(token){
                this.token = token
                if(token){
                    localStorage.setItem('token',token)
                    console.log(token,": this token is saved")
                }

                else{localStorage.removeItem('token',token)};
            }
        },
    }

)

export default store