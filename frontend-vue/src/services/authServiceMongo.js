import apiMongo from "./apiMongo";

export default{
    addProduct(productData){
        return apiMongo().post('product',productData)
    }
}