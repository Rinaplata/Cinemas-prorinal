<template>
<div class="title">
 <h1>EN CARTELERA</h1>
</div>
<div class="badass-todo">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/pelicula1.png" alt="Placeholder image" class="pelicula1">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">

      <div class="media-content">
        <p class="subtitle is-6">Mavka: The Forest Song</p>
      </div>
    </div>

    <div class="content">
        Mavka, un alma del Bosque, se enfrenta a una elección imposible entre el amor y su deber como guardiana del Corazón del Bosque, cuando se enamora de un humano, el joven músico de talento Lukash
     
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/pelicula2.png" alt="Placeholder image" class="pelicula1">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">

      <div class="media-content">
        <p class="subtitle is-6">Killers of the Flower Moon</p>
      </div>
    </div>

    <div class="content">
        Cuando se descubre petróleo en la Oklahoma de los años 20, bajo las tierras de la nación Osage, sus pobladores son asesinados uno a uno hasta que el FBI interviene para resolver los crímenes.
     
    </div>
  </div>
</div>

</div>

</template>

<style>
@import 'bulma/css/bulma.min.css';

body {
  background-image: url(../assets/Cinema.jpeg);
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.title{
    position: relative;
    top: 100px;
    text-align: center;
    padding: 20px;
}

.card{
    margin: 10px;
}
.badass-todo{
    display: flex;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    height: auto;
    padding: 70px;
}

.pelicula1{
    width: 120px;
    height: 100px;
}


</style>