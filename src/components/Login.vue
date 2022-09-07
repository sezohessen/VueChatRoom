<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(){
        //refs
        const email         = ref('')
        const password      = ref('')
        const handleSubmit  = () => {
            console.log(email,password)
        }

        return {email,password,handleSubmit}
    }
};
</script>

<style>
</style>