
<template>
    <nav>
        <div >
            <RouterLink class="ml-4" to="/">Home</RouterLink>
            <RouterLink class="ml-4" to="/">Fedd</RouterLink>
            <RouterLink class="ml-4" to="/login">Iniciar Sesión</RouterLink>
            <RouterLink  class="ml-4" to="/singup">Registrate</RouterLink>
        </div>
        <div >
            <button @click="handleSignOut">Sign out</button>
        </div>
    </nav>
</template>

<script setup>
    import {onMounted, ref} from "vue"
    import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

    const isLoggedIn= ref(false);
    let auth;
    onMounted(() => {
        auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user){
                isLoggedIn.value = true;
            }else {
                isLoggedIn.value = false;
            }
        });
    });

    const handleSignOut = () => {

    }
</script>