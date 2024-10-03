<script>
import authServiceMongo from '@/services/authServiceMongo';
import store from '@/stores/storePinia';
import { mapActions } from 'pinia';


export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(store, ['setToken']),
    async registerUser() {
      console.log('button was clicked')

        const res = await authServiceMongo.loginUser({
        userName:this.name,
        userPassword: this.password
      });
     
      console.log('access Token:', res.data);

      if(res.status === 201 && res.data){
        const token = res.data
        this.setToken(token)
        console.log('login successful',token)
      }

      this.name =''
      this.password=''
    },
    

  },

};
</script>

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
