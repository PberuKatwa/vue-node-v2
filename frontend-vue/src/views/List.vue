<script>
import authenticationService from '@/services/authenticationService';

export default {
  data() {
    return {
      usersList: [],
      password: '',
    };
  },
  async created(){
    try{
        const response = await authenticationService.getUser();
        this.usersList = response.data;
    }
    catch{
        console.error('user list error:', error)
    }
  }
  
  
};
</script>

<template>

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
                
            </tr>
        </tbody>
    </table>

</template>

<style scoped>

body {
            font-family: Arial, sans-serif;
            margin: 20px;
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
