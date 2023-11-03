<template>
  <div class="form">
    <h1>Sign In</h1>
    <section>
      <input class="email" type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p class="error" v-if="errMsg">{{ errMsg }}</p>
      <button class="submit" @click="register">Sumbit</button>
      <button class="google" @click="signInWithGoogle">
        <img class="icon" src="../assets/IconGoogle.jpeg" alt="" />Sign In With Google
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref("");

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "Invalid email";
          break;
        case "auth/wrong-password":
          errMsg.value = "Invalid email";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};

const signInWithGoogle = () => {};
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

.icon {
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

.error{
    color: red;
    font-weight: 700;
    font-size: 20px;

}
</style>
