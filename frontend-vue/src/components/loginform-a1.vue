<script>
import { mapActions } from 'vuex'
import authServiceMongo from '@/services/authServiceMongo'

export default {
  data() {
    return {
      name: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions(['setToken']),
    async registerUser() {
      console.log('Login button was clicked')
      try {
        const response = await authServiceMongo.loginUser({
          userName: this.name,
          userPassword: this.password
        })
        
        if (response.status === 201 && response.data) {
          // The response.data is now the access token
          const token = response.data
          // Dispatch the setToken action to store the token in Vuex
          this.setToken(token)
          console.log('Login successful, token stored in Vuex',token)
          this.error = null
          // You might want to redirect the user or update the UI here
          // For example:
          // this.$router.push('/dashboard')
        } else {
          this.error = 'Login failed. Please try again.'
        }
      } catch (error) {
        console.error('Login error:', error)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.error = error.response.data.message || 'An error occurred during login'
        } else if (error.request) {
          // The request was made but no response was received
          this.error = 'No response from server. Please try again later.'
        } else {
          // Something happened in setting up the request that triggered an Error
          this.error = 'An error occurred. Please try again.'
        }
      }
    },
  },
}</script>

<template>


    <!-- Registration 7 - Bootstrap Brain Component -->
     
<section class=" p-3 p-md-4 p-xl-5 register-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
        <div class="card border border-light-subtle rounded-4">
          <div class="card-body p-3 p-md-4 p-xl-5">
            <div class="row">
              <div class="col-12">
                <div class="mb-5">

                  <h2 class="h4 text-center">Login User</h2>
                  
                </div>
              </div>
            </div>
            
              <div class="row gy-3 overflow-hidden">


                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input  class="form-control" name="name" id="name" 
                    placeholder="name@example.com" required v-model="name">
                    <label for="email" class="form-label">name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="password" id="password" 
                    value="" placeholder="Password" required v-model="password">
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn bsb-btn-xl btn-primary" 
                    @click="registerUser">
                    Login
                </button>
                  </div>
                </div>
              </div>
            
            <div class="row">
              <div class="col-12">
                <hr class="mt-5 mb-4 border-secondary-subtle">
                <p class="m-0 text-secondary text-center">Already have an account? <a href="#!" class="link-primary text-decoration-none">Sign in</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<style scoped>

.register-section{
    background:linear-gradient(120deg,rgb(122, 231, 231),rgb(120, 109, 221),rgb(184, 67, 207));
    height: max-content;
    width:100vw;
}

</style>
