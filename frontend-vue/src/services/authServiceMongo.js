import apiMongo from "./apiMongo";

export default{
    addProduct(productData){
        return apiMongo().post('product',productData)
    },
    addUser(userDetails){
        return apiMongo().post('profile',userDetails)       
    },
    loginUser(userDetails){
        return apiMongo().post('login',userDetails)
    },
    getProducts(token){
        return apiMongo().get('product',{
            headers:{'Authorization':`Bearer ${token}`}
        })
    },
    logoutUser(token){
        return apiMongo().post('logout',null,{
            headers:{'Authorization':`Bearer ${token}`}
        })
    }
}