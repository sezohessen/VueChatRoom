<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display name" v-model="displayName"/>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error">
        {{ error }}
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '../composables/useSignup'
export default {
    setup(props,context){
        const {error,signup} = useSignup()
        //refs
        const displayName   = ref('')
        const email         = ref('')
        const password      = ref('')
        const handleSubmit  = async () => {
            await signup(email.value,password.value,displayName.value)
            if(!error.value){
                console.log('registered')
                context.emit('signup')
            }
        }

        return {displayName,email,password,handleSubmit,error}
    }
};
</script>

<style>
</style>