<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Titulo</th>
        <th class="text-left">Genero</th>
        <th class="text-left">Director</th>
        <th class="text-left">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in movie" :key="item.name">
        <td>{{ item.Id }}</td>
        <td>{{ item.Titulo }}</td>
        <td>{{ item.Genero }}</td>
        <td>{{ item.Director }}</td>
        <td>
          <v-btn> Actualizar </v-btn>
          <v-btn> Eliminar </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      movie: [
        {
          Id: 1,
          Titulo: "El Secreto de las Mariposas",
          Genero: "Drama",
          Director: "Alejandro Gómez",
        },
        {
          Id: 2,
          Titulo: "Aventuras en la Ciudad Perdida",
          Genero: "Aventura",
          Director: "Isabel Martínez",
        },
        {
          Id: 3,
          Titulo: "Código de Ética",
          Genero: "Thriller",
          Director: "Carlos Rodríguez",
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/Cinema.jpeg);
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
