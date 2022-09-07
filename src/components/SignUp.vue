<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display name" v-model="displayName"/>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(){
        //refs
        const displayName   = ref('')
        const email         = ref('')
        const password      = ref('')
        const handleSubmit  = () => {
            console.log(displayName,email,password)
        }

        return {displayName,email,password,handleSubmit}
    }
};
</script>

<style>
</style>