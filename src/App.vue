<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/shared/HeaderComponent.vue";
import FooterComponent from "./components/shared/FooterComponent.vue";
</script>

<template>
  <div class="app-container">
    <HeaderComponent />
    <main>
      <RouterView />
    </main>
    
      <FooterComponent />
    
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

main  {
  flex-grow: 1; 
  margin-bottom: 150px;
}
</style>
