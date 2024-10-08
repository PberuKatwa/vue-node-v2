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
    },
    deleteProduct(productName){
        return apiMongo().delete(`/product/name/${productName}`)
    },
    searchProduct(token, productName){
        return apiMongo().get(`/product/name/${productName}`,
            {headers:{'Authorization':`Bearer ${token}`} }
        )
    },
    getProductByName(token, productName){
        return apiMongo().get(`/product/name/${productName}`,
            {headers:{'Authorization':`Bearer ${token}`} }
        )
    },
    updateProductByName(token,productName,productDetails){
        return apiMongo().post(`/product/name/${productName}`, productDetails,
            {headers:{'Authorization':`Bearer ${token}`} }
        )
    },
    
}