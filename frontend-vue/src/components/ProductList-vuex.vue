<script>
import authServiceMongo from '@/services/authServiceMongo';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      productsList: [],
    };
  },
  computed:{
    ...mapState({
      token: state => state.token, // Corrected mapState usage
    })
  },


  async created(){
    try{      
        const response = await authServiceMongo.getProducts(this.token);
        this.productsList = response.data;
        console.log('this is the data:',response.data)    
    }
    catch{
        console.error('user list error:', error)
    }
  },
  
  
  
};
</script>

<template>
           
<table>
        <caption>Product List</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                
            </tr>
        </thead>
        <tbody>

            <tr v-for="product in productsList" :key="product.id">
                <td>{{ product._id }}</td>
                <td>{{ product.productName }}</td>
                <td>{{ product.productDescription }}</td>
                <td>{{ product.productPrice }}</td>
                


                
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

