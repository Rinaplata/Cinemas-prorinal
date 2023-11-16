<script setup>
</script>


<template>
  <v-footer class="bg-white text-center">
    <v-container>
      <v-row>
        <v-col class="text-right">
          <div class="footer-content">
            <img src="../../assets/logonegro.png" alt="Logo del footer" class="footer-logo" />
          </div>
          <h4 class="text-light">Todos los derechos Reservados.</h4>
          <p class="text-light">TdeA 2023</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<style>

.footer-content {
  max-height: 100px;
  margin: -25px;
  text-align: center;
}
.bg-white {
  background-color: #ffffff; 
}
.text-light {
  color: #000000;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 4px;
  text-align: center;
} 

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
} 

.footer-logo {
  max-width: 100px;
  margin: 2px;
}

</style> 