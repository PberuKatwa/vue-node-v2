<script>
import { mapState } from 'vuex'
import authServiceMongo from '@/services/authServiceMongo'

export default {
  data() {
    return {
      productsList: [],
      error: null
    }
  },
  computed: {
    ...mapState(['token'])
  },
  async created() {
    if (!this.token) {
      this.error = 'Not authenticated. Please log in.'
      // Optionally redirect to login page
      // this.$router.push('/login')
      return
    }

    try {
      const response = await authServiceMongo.getProducts(this.token)
      this.productsList = response.data
      console.log('This is the data:', response.data)
    } catch (error) {
      console.error('Product list error:', error)
      if (error.response && error.response.status === 401) {
        this.error = 'Authentication failed. Please log in again.'
        // Optionally handle token expiration here
        // this.$store.dispatch('clearToken')
        // this.$router.push('/login')
      } else {
        this.error = 'An error occurred while fetching products.'
      }
    }
    
  }
}
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

