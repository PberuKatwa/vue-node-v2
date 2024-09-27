<script >
import authenticationService from '@/services/authenticationService';

export default{
    props:['id'],
    data(){
        return{
            user: {},
            updateName:'',
            updatePassword:''
        }
        
    },
    async created(){
        const response = await authenticationService.getUserById(this.id);
        this.user = response.data
        console.log('response from server:', response.data)
        console.log('user-dictionary:',this.user)
        console.log('user-id:',this.id)
        
    },
    methods:{

        async nameUpdate(userId){
            const response = await authenticationService.editUserDetails(
                userId,{
                    userName:this.updateName
                }            
            )
            console.log('this is the update data:',response.data)
        },
        async passwordUpdate(userId){
            const response = await authenticationService.editUserDetails(
                userId,{
                    userPassword:this.updatePassword
                }            
            )
            console.log('this is the password data:',response.data)
        },


      
    }

}

</script>

<template>
   <div class="container">
        <!-- Left Side (Headings) -->
        <div class="left">
            <div class="row">
                <p>ID:</p>
            </div>
            <div class="row">
                <p>Username:</p>
            </div>
            <div class="row">
                <p>Password:</p>
            </div>
            <div class="row">
                <p>Created At:</p>
            </div>
            <div class="row">
                <p>Updated At:</p>
            </div>
        </div>

        <!-- Right Side (Body/Values) -->
        <div class="right">
            <div class="row">
                <p>{{ user.id }}</p>
            </div>
            <div class="row">
                <p>{{ user.userName }}</p>
            </div>
            <div class="row">
                <p>{{ user.userPassword }}</p>
            </div>
            <div class="row">
                <p>{{ user.createdAt }}</p>
            </div>
            <div class="row">
                <p>{{ user.updatedAt }}</p>
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
                <input type="text" placeholder="edit Password" v-model="updatePassword">  
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
                <button class="btn btn-dark" @click="nameUpdate(user.id)">edit name</button>  
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
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

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