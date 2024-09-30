<script>
import authServiceMongo from '@/services/authServiceMongo';

export default {
  data() {
    return {
      name: '',
      description: '',
      price:''
    };
  },
  methods: {
    async registerProduct() {

        console.log('button was clicked')
        console.log(this.name)

        const response = await authServiceMongo.addProduct({
            productName:this.name,
            productDescription:this.description,
            productPrice:this.price
        });
        console.log('product add data:', response.data);

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

                  <h2 class="h4 text-center">Product Registration</h2>
                  
                </div>
              </div>
            </div>
            
              <div class="row gy-3 overflow-hidden">


                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input  class="form-control" name="name" id="name" 
                    placeholder="product name" required v-model="name">
                    <label for="email" class="form-label">product name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input  class="form-control" name="name" id="name" 
                    placeholder="product description" required v-model="description">
                    <label for="email" class="form-label">product description</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input  class="form-control" name="name" id="name" 
                    placeholder="product price" required v-model="price">
                    <label for="email" class="form-label">product price</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn bsb-btn-xl btn-primary" 
                    @click="registerProduct">
                    Save Product
                </button>
                  </div>
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
