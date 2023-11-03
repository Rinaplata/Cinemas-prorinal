<template>
  <nav class="header">
    <div class="logo">
      <img src="../../assets/logorina.png" alt="Logo de la empresa" class="logo-img" />
    </div>
    <div class="nav-items">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/feed">Fedd</RouterLink>
      <RouterLink class="nav-link" to="/sign-in">Iniciar Sesión</RouterLink>
      <RouterLink class="nav-link" to="/register">Registrate</RouterLink>
    </div>
    <div class="sign-out">
      <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;

}

.nav-items {
  display: flex;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #ffffff;
}

.sign-out button {
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logo-img {
  max-width: 150px; 
  max-height: 100px; 
}
</style>
