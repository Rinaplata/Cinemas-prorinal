<template>
  <div class="home-container">
    <div class="welcome-text">
      <h1>Bienvenido a Cinema Prorinal</h1>
      <span class="text-p">
        <p>
          Cinema Prorinal es una plataforma de entretenimiento digital que se
          especializa en la distribución y exhibición de contenido audiovisual
          de diversos géneros, incluyendo películas, series de televisión,
          documentales y otros programas. Con un enfoque en brindar una
          experiencia de entretenimiento de alta calidad, Cinema Prorinal ofrece
          una amplia variedad de opciones para usuarios de todas las edades y
          preferencias
        </p>
      </span>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url(../assets/CINEMA\ PRORINAL.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.welcome-text {
  display: block;
  flex: 0 0 auto;
  width: 50%;
  text-align: left;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  bottom: 100px;
}

.text-p {
  text-align: left;
  max-width: 100px;
  margin: 10px;
  font-size: 24px;
}

.home-container {
  color: #fff;
}
</style>
