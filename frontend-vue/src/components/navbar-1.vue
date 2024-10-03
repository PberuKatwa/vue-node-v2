<script>
import authServiceMongo from '@/services/authServiceMongo'; // Import the service
import store from '@/stores/storePinia'; // Import the store if you still need to clear the token

export default {
  computed: {
    token() {
      return store().token;  // Get the token from the store
    },
  },
  methods: {
    async logoutUser() {
      console.log('Logout button clicked');

      try {
        if (this.token) {
          // Call the logoutUser function directly from the service
          await authServiceMongo.logoutUser(this.token);
          console.log('Logout successful');
          
          // Clear the token from the store
          store().setToken(null);  
          
          // Optionally redirect to login page
          this.$router.push('/login');
        } else {
          console.log('No token available');
        }
      } catch (error) {
        console.log('Logout failed:', error);
      }
    },
  },
};

</script>



<template>
    <nav class="navbar">
          <div class="logo">
              <a href=""> <img src="/src/assets/vue.png" alt=""> <RouterLink to="/"></RouterLink></a>
              
          </div>
          <ul class="nav-links">
              <li> <RouterLink to="/">Home</RouterLink> </li>
                  
              <li> <RouterLink to="/about">About</RouterLink> </li>
    
              <li> <RouterLink to="/register">Register</RouterLink> </li>

              <li> <RouterLink to="/login">Login</RouterLink> </li>

              <li> <RouterLink to="/product-registration">product registration</RouterLink> </li>
                  
              <li> <RouterLink to="/list">List</RouterLink> </li>

              <li> <button class="btn btn-dark" @click="logoutUser" >logout</button> </li>

              
              
          </ul>
      </nav>
     
  </template>



  
  <style scoped>
  
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
  }
  
  .navbar {
      background-color: white; 
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
      width: 98vw;
      margin: auto;
      font-family: 'poppins';
  }
  
  
  .logo h1 {
      margin: 0;
      font-size: 24px;
      color: #333; 
  }
  
  .logo img{
      height: 50px;
  }
  
  
  .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
  }
  
  .nav-links li {
      margin: 0;
  }
  
  .nav-links a {
      text-decoration: none;
      color: #333; 
      font-size: 18px;
      padding: 8px 16px;
      transition: background-color 0.3s;
  }
  
  .nav-links a:hover {
      background-color: #999797;
      border-radius: 4px;
  }
  
  </style>
  