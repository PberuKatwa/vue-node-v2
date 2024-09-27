<template>
    <nav class="navbar">
          <div class="logo">
              <a href=""> <img src="/src/assets/vue.png" alt=""> <RouterLink to="/"></RouterLink></a>
              
          </div>
          <ul class="nav-links">
              <li> <RouterLink to="/">Home</RouterLink> </li>
                  
              <li> <RouterLink to="/about">About</RouterLink> </li>
    
              <li><a href="#">Contact</a></li>

              <li> <RouterLink to="/">Register</RouterLink> </li>
                  
              <li> <RouterLink to="/list">List</RouterLink> </li>
              
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
  