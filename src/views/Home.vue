<template>
  <div class="Home-container">
    <div class="welcome-text">
      <h1>Bienvenido a Cinema Prorinal</h1>
      <span class="text-p">
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
}

.text-p {
  text-align: left;
  max-width: 100px;
  margin: 10px;
  font-size: 24px;
}

.Home-container {
  color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
