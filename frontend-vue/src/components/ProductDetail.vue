<script >
import authServiceMongo from '@/services/authServiceMongo';
import store from '@/stores/storePinia';
import { mapState } from 'pinia';

export default{
    computed:{
        productName(){
            return store().storeProductName;
        },
        ...mapState(store,['token'])
    },
    data(){
        return{
            products: [],
            updateName:'',
            updateDescription:'',
            updatePrice:''
        }
        
    },
    async created(){
        await this.getProduct(this.token)
        
    },
    methods:{

        loadLocalStorage(){
            return localStorage.getItem('productName')
        },

        async getProduct(){

            const localName = this.loadLocalStorage()
            console.log("this is the local storage data",localName)
            

            try{
                const response = await authServiceMongo.getProductByName(this.token,localName)
                this.products = response.data
                console.log('response from server:', response.data)
                console.log('product-dictionary:',this.product)
               
                console.log('product name:',this.productName)
            }
            catch(error){
                console.log('cannot retreive products:', error)
            }
        },

        async nameUpdate(productName){
            try{
                const response = await authServiceMongo.updateProductByName(productName,{
                    productName:this.updateName
                })
                console.log('name update:', response)
            }
            catch{
                console.log('unable to update product name')
            }
        }


    },
   


}

</script>

<template>


   <div class="container" v-for="product in products" :key="product._id">

        <!-- Left Side (Headings) -->
        <div class="left">
            <div class="row">
                <p>Product Name:</p>
            </div>
            <div class="row">
                <p>Product Description:</p>
            </div>
            <div class="row">
                <p>Product Price:</p>
            </div>
            <div class="row">
                <p>Updated At:</p>
            </div>
        </div>

        <!-- Right Side (Body/Values) -->
        <div class="right" >
            <div class="row">
                <p>{{ product.productName }}</p>
            </div>
            <div class="row">
                <p>{{ product.productDescription }}</p>
            </div>
            <div class="row">
                <p>{{ product.productPrice }}</p>
            </div>
            <div class="row">
                <p> product.updatedAt </p>
            </div>
           
        </div>

        <div class="right">
            <div class="row">
                 <h5>cannot edit</h5>           
            </div>
            <div class="row">
                <input type="text" placeholder="edit name" v-model="updateName">  
            </div>
            <div class="row">
                <input type="text" placeholder="edit Password" v-model="updateDescription">  
            </div>
            <div class="row">
                <h5>cannot edit</h5>    
            </div>
            <div class="row">
                <h5>cannot edit</h5>    
            </div>
           
        </div>
        <div class="right">
            <div class="row">
                 <h5>cannot edit</h5>           
            </div>
            <div class="row">
                <button class="btn btn-dark" @click="nameUpdate(product.productName)">edit name</button>  
            </div>
            <div class="row">
                <button class="btn btn-dark" @click="passwordUpdate(user.id)">edit password</button>   
            </div>
            <div class="row">
                <h5>cannot edit</h5>    
            </div>
            <div class="row">
                <h5>cannot edit</h5>    
            </div>
           
        </div>
    </div>

</template>

<style scoped>


            .container {
            display: flex;
            max-width: 98vw;
            width: 100%;
            border: 3px solid transparent;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            padding: 10px 5px;
            /*
            border-image: linear-gradient(150deg, red , yellow);
            border-image-slice: 1;
            */
           
          
        }

        .left {
            width: 40%;
            padding: 20px;
            background-color: #4CAF50;
            color: white;
            text-align: right;
            font-weight: bold;
        }

        .right {
            width: 60%;
            padding: 20px;
            background-color: #fff;
            color: #333;
            border: 1px solid #ddd;
        }

        .row {
            margin-bottom: 15px;
            height: 50px;
           
        }
         .row h5{
            color: #706c6c;
         }

        .row:last-child {
            margin-bottom: 0;
        }

        .left p, .right p {
            margin: 0;
            padding: 0;
        }

        .right p {
            word-wrap: break-word;
        }
</style>