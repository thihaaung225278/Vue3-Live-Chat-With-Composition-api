<template>
<div class="row mt-5">
    <div class="col-md-6 mx-auto">
        <div class="card p-3 shadow-sm border border-2">
            <div v-if="error">
                <p class="text-danger">{{error}}</p>
            </div>
            <form @submit.prevent="signup">
                <span class="badge bg-warning mb-3"><h2 class="text-dark">Signup Account</h2></span>
                <div class="mb-3">
                    <label for="username" class="form-label">User Name</label>
                    <input type="text" class="form-control border border-warning border-0 border-bottom rounded-0 shadow-none" id="username" v-model="username">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="password" v-model="password">
                </div>
                <div class="d-flex justify-content-start">
                    <button type="submit" class="btn btn-warning shadow-sm">Signup Now</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"
import useSignup from "../composables/useSignup"

export default {
    setup(){
        let username = ref("");
        let email = ref("");
        let password = ref("");
        let {error, createAccount} = useSignup();

        let router = useRouter();

        let signup = async() =>{
            let res = await createAccount(email.value, password.value, username.value);
            if(res){
                router.push({name: "Chatroom"})
            }

        }

        return {username, email, password, error, signup}
    }
}
</script>

<style>

</style>