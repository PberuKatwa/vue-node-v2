import { defineStore } from "pinia";


const store = defineStore(
    'store',{
        state:() =>({token:localStorage.getItem('token')||null,
                    storeProductName:localStorage.getItem('productName')||null}
    ),
        actions:{
            setToken(token){
                this.token = token
                if(token){
                    localStorage.setItem('token',token)
                    console.log(token,": this token is saved")
                }

                else{localStorage.removeItem('token',token)};
            },
            setProductName(storeProductName){
                this.productName = storeProductName

                if(storeProductName){
                    localStorage.setItem('productName', storeProductName)
                    console.log(storeProductName,":has been set")
                } else{
                    console.log('productName was unssuccessful store')
                }
            }
        },
    }

)

export default store