<template>
  <div class="form">
    <h1>Create an Account</h1>
    <section>
      <input class="email" type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" /><br />
      <button class="submit" @click="register">Sumbit</button>
      <button class="google" @click="signInWithGoogle">
        <img src="../assets/IconGoogle.jpeg" alt="" /> Sign In With Google
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style>
body {
  background-image: url(../assets/Cinema.jpeg);
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  width: 100%;
}

h1 {
  margin-top: 3%;
  width: 100%;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

input {
  width: 70%;
  border-radius: 5px;
  height: 40px;
  text-align: center;
  margin-top: 25px;
  border: none;
  outline: none;
}
button {
  margin-top: 25px;
  width: 60%;
  height: 30px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.google {
  background-color: #f4f1f4;
  color: black;
  font-weight: 700;
  margin-left: 70px;
}

img {
  width: 18px;
  margin-right: 20px;
}

.submit {
  margin-top: 45px;
  margin-left: 70px;
  color: white;
  background-color: #6d3dff;
}

input:focus {
  box-shadow: 0px 5px 5px #6d3dff;
}
</style>
