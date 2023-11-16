import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


import 'vuetify/dist/vuetify.min.css'


import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Zb3Q43PY761ZD4uLPHNxehuhKllrDw8",
  authDomain: "cinemas-prorinal.firebaseapp.com",
  projectId: "cinemas-prorinal",
  storageBucket: "cinemas-prorinal.appspot.com",
  messagingSenderId: "363724900794",
  appId: "1:363724900794:web:9ed03707d1784ee88d3583"
};


// Initialize Firebase
initializeApp(firebaseConfig);

app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(vuetify)