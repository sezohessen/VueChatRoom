import { projectAuth,createUserWithEmailAndPassword,updateProfile } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const signup = async (email,password,displayName) => {
    error.value = null
    try {
        const response = await createUserWithEmailAndPassword(projectAuth,email,password)
        
        if(!response){
            throw new Error ('Could not complete signup')
        }
        await updateProfile(projectAuth.currentUser, {
            displayName: displayName
        })
        error.value = null
        console.log(response.user)
        return response
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}
const useSignup = ()=>{

    return {error,signup}
}
export default useSignup