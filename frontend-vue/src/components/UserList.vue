<script>
import authenticationService from '@/services/authenticationService';
import UserDetail from './UserDetail.vue';

export default {
  data() {
    return {
      usersList: [],
      password: '',
      searchId:'',
      userSearchList:{}

    };
  },
  
  components:{
    UserDetail
  },

  async created(){
    try{
        const response = await authenticationService.getUser();
        this.usersList = response.data;
        
    }
    catch{
        console.error('user list error:', error)
    }
  },
  methods:{
    async deleteUser(userId) {
      try {
        console.log(`button clicked ${userId}`)
        const response = await authenticationService.deleteUser(userId);
        
        this.usersList = this.usersList.filter(user => user.id !== userId);
        console.log('response:',response)
        console.log(`User with ID ${userId} deleted successfully.`);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async viewUser(userId){
        console.log(`view user button clicked ${userId}`)

        
        this.$router.push({name:'user-detail',params:{ id:userId }})
    },
    async searchUser(userId){
        const response = await authenticationService.getUserById(userId);

        this.usersList = [response.data];
        console.log('search list usersList:', this.usersList)
        console.log('search results:', response.data)

    }
  }
  
  
};
</script>

<template>
            <div class="search-box">
                <input type="text" placeholder="search user" v-model="searchId">
                <button class="btn btn-dark" @click="searchUser(searchId)"> 
                    search <i class="fa-solid fa-magnifying-glass"></i> 
                </button>
            </div>
<table>
        <caption>User Information</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="user in usersList" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.userName }}</td>
                <td>{{ user.userPassword }}</td>
                <td>{{ user.createdAt }}</td>
                <td>{{ user.updatedAt }}</td>

                <td>
                    <button class="btn btn-primary" @click="deleteUser(user.id)">Delete</button>
                    
                </td>
                <td>
                    <button class="btn btn-primary" @click="viewUser(user.id)">Edit User</button>
                    
                </td>
                
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
