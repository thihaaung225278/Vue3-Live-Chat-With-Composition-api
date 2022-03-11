<template>
  <div class="card-header d-flex justify-content-between align-items-center">
    <div v-if="user">
        <div class="username">{{user.displayName}}</div>
        <div class="email">{{user.email}}</div>
    </div>
    <div>
        <button class="btn btn-warning" @click="logout">Logout</button>
    </div>
</div>
</template>

<script>
import getUser from "../composables/getUser"
import useLogout from "../composables/useLogout"

export default {
    setup(){
        let {user} = getUser();
        let {logoutAccount} = useLogout();

        let logout = async() =>{
            await logoutAccount();
        }

        return {logout, user}
    }
}
</script>

<style>

</style>