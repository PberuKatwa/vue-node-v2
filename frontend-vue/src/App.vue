<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';

</script>

<template>
  <header>
    

    <div class="wrapper">
      
      <navbar/>
    </div>

    <RouterView />
  </header>

 
</template>

<style scoped>

</style>
