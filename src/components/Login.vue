<template>
<div class="row mt-5">
  <div class="col-md-6 mx-auto">
        <div class="card p-3 shadow-sm border border-2">
            <div v-if="error">
                <p class="text-danger">{{error}}</p>
            </div>
            <form @submit.prevent="login">
                <span class="badge bg-warning mb-3"><h2 class="text-dark">Login Account</h2></span>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="password" v-model="password">
                </div>
                <div class="d-flex justify-content-start">
                    <button type="submit" class="btn btn-warning shadow-sm">Login</button>
                </div>
                
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composables/useLogin"

export default {
    setup(props, context){
        let email = ref("");
        let password = ref("");
        let {error, loginAccount} = useLogin();

        let login = async() =>{
            let res = await loginAccount(email.value, password.value);
            if(res){
                context.emit("enterChatroom");
            }
        }

        return {email, password, error, loginAccount, login}
    }
}
</script>

<style>

</style>