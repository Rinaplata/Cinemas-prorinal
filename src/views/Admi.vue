<template>
  <div class="container">
    <h1 class="text-center">Lista de Películas</h1>
    <v-btn @click.native="agregarPelicula" class="buttonAgregar"
      >Añadir Película</v-btn
    >

    <div v-if="mostrarTarjeta">
      <v-card class="mx-auto my-8" max-width="344" elevation="16">
        <v-sheet width="600" class="mx-auto">
          <v-form @submit.prevent>
            <v-text-field style="font-weight: bold"
              v-model="id"
              :rules="rules"
              label="Id"
            ></v-text-field>

            <v-text-field style="font-weight: bold"
              v-model="titulo"
              :rules="rules"
              label="Titulo"
            ></v-text-field>

            <v-text-field style="font-weight: bold"
              v-model="genero"
              :rules="rules"
              label="Genero"
            ></v-text-field>

            <v-text-field style="font-weight: bold"
              v-model="director"
              :rules="rules"
              label="Director"
            ></v-text-field>
            <v-card-actions>
              <v-btn class="BottonCalcelar" @click="cancelarAgregado">Cancelar</v-btn>
              <v-btn class="BottonGuardar" @click="guardarPelicula">Guardar</v-btn>
            </v-card-actions>
          </v-form>
        </v-sheet>
      </v-card>
    </div>
    <v-table class="table-container">
      <thead>
        <tr>
          <th class="text-left title" style="font-weight: bold">Id</th>
          <th class="text-left" style="font-weight: bold">Titulo</th>
          <th class="text-left" style="font-weight: bold">Genero</th>
          <th class="text-left" style="font-weight: bold">Director</th>
          <th class="text-left" style="font-weight: bold">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in movie" :key="item.name">
          <td>{{ item.Id }}</td>
          <td>{{ item.Titulo }}</td>
          <td>{{ item.Genero }}</td>
          <td>{{ item.Director }}</td>
          <td class="botones">
            <v-btn class="bottonActualizar"> Actualizar </v-btn>
            <v-btn class="bottonEliminar"> Eliminar </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
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
      mostrarTarjeta: false,
    };
  },
  methods: {
    agregarPelicula() {
      console.log("click on agregar peli");
      this.mostrarTarjeta = true;
    },

    cancelarAgregado() {
      this.mostrarTarjeta = false;
    },

    guardarPelicula() {
      this.movie.push({
        Id: this.movie.length + 1,
        Titulo: this.nuevaPelicula.Titulo,
        Genero: this.nuevaPelicula.Genero,
        Director: this.nuevaPelicula.Director,
      });
      this.mostrarTarjeta = false;
      this.nuevaPelicula = {
        Titulo: "",
        Genero: "",
        Director: "",
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: contents;
  justify-content: center;
  width: 900px;
  height: 100%;
}

.text-center {
  text-align: center;
}

.table-container {
  padding: 90px;
  margin: 90px;
}

.buttonAgregar {
  background-color: #ffc107;
  color: white;
  font-weight: 700;
  border: 2px;
  width: 250px;
  height: 46px;
  left: 4%;
}

.botones {
  display: flex;
  gap: 20px;
}

.bottonActualizar {
  width: 163px;
  height: 33px;
  border: 2px;
  background-color: #8bc34a;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 22px;
}

.bottonEliminar {
  width: 163px;
  height: 33px;
  border: 2px;
  background-color: #f44336;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 22px;
}

.BottonCalcelar{
  font-size: 13px;
  background-color: #f44336;
  font-weight: 700;
  color: white;
  width: 100px;
  position: relative;
  bottom: 20px;
  left: 50px;
}

.BottonGuardar{
  font-size: 13px;
  background-color: #ffc107;
  font-weight: 700;
  color: white;
  width: 100px;
  position: relative;
  bottom: 20px;
  left: 50px;
}

th {
  font-weight: bold;
}
</style>
