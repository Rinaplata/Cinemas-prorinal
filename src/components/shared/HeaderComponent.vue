
<template>
    <nav>
        <div >
            <RouterLink class="ml-4" to="/">Home</RouterLink>
            <RouterLink class="ml-4" to="/feed">Fedd</RouterLink>
            <RouterLink class="ml-4" to="/sign-in">Iniciar Sesión</RouterLink>
            <RouterLink  class="ml-4" to="/register">Registrate</RouterLink>
        </div>
        <div >
            <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        </div>
    </nav>
</template>

<script setup>
    import {onMounted, ref} from "vue"
    import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
    import {useRouter} from "vue-router"

    const router = useRouter();
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
        signOut(auth).then(() => {
            router.push("/")
        })
    }
</script>