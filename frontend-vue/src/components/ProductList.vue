<script>
import authServiceMongo from '@/services/authServiceMongo';
import store from '@/stores/storePinia';
import { mapActions, mapState } from 'pinia';
import ProductDetail from './ProductDetail.vue';

export default {
    
  data() {
    return {
      productsList: [],
      productName:'',
      allProductsList:[],
      noResults:false
    };
  },
  computed:{
    computed: {
    ...mapState(store, ['token', 'storeProductName'])
  }
   
    
  },


  async created(){
    try{      
        const response = await authServiceMongo.getProducts(this.token);
        this.productsList = response.data;
        this.allProductsList = response.data;
        console.log('this is the data:',response.data)    
    }
    catch{
        console.error('user list error:', error)
    }
  },
  methods:{

    ...mapActions(store,['setProductName']),

    async deleteProduct(name){
        console.log('product has been deleted')
        try{
        const response = await authServiceMongo.deleteProduct(name)
        console.log("delete product response",response)

        }catch{
            console.log('product not deleted')
        }
    },
    async searchProduct(productName){
        console.log(this.productName)

        if(!this.productName.trim()){
            this.productsList = this.allProductsList
            this.noResults = false
            return
        }

        try{
            const response = await authServiceMongo.searchProduct(productName)
            console.log('product found:', response.data)
            // this.productsList = response.data

            if (!response.data && response.data.length === 0){
                this.productsList = []
                this.noResults = true
            } else{
                this.productsList = response.data
                this.noResults = false
            }
            
            

        }
        catch{
            console.log('search is not working')
            this.noResults = true
            this.productsList = []

            
        }

    },

    async viewProduct(productName){
        console.log('view button was clicked:', productName)
        try{
            let data = this.setProductName(productName)
            console.log('data:', data, productName)
            this.$router.push({path:'/product' })
        }
        catch{
            console.log('not able to display this product')
        }
    }
  },
  watch:{
    productName(newValue){
        this.searchProduct(newValue)
    }
  }
  
  
  
};
</script>

<template>

    <div class="search-box">
        <input type="text" v-model="productName">
        <button class="btn btn-dark" @click="searchProduct(productName)"> search <i class="fa-solid fa-magnifying-glass"></i> </button>
    </div>

    <div class="alert alert-danger" role="alert" v-if="noResults">
        no search results
    </div>
           
<table v-if="!noResults">
        <caption>Product List</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Price</th>
                <th>Price</th>
                
            </tr>
        </thead>
        <tbody>

            <tr v-for="product in productsList" :key="product.id">
                <td>{{ product._id }}</td>
                <td>{{ product.productName }}</td>
                <td>{{ product.productDescription }}</td>
                <td>{{ product.productPrice }}</td>
                <td><button class="btn btn-primary" @click="viewProduct(product.productName)"> View Product </button></td>
                <td><button class="btn btn-danger" @click="deleteProduct(product.productName)"> Delete Product </button></td>
                


                
            </tr>
        </tbody>
    </table>

    

</template>

<style scoped>

body {
            font-family: Arial, sans-serif;
            margin: 20px;
            
        }

        .search-box{
            margin:10px;
            height:40px;
            display:flex;
            justify-content: center;
            border-radius: 35px;
            line-height: 1;
            gap: 5px;
        }

        .search-box button{
            
            padding: 7px ;
        }


        table {
            width: 100%;
            border-collapse: collapse;
            
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        caption {
            caption-side: top;
            font-size: 1.5em;
            margin-bottom: 10px;
            font-weight: bold;
        }

</style>

