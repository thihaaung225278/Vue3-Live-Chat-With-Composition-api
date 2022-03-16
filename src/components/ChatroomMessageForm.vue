<template>
    <div class="card-footer">
        <form>
            <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="message" @keypress.enter.prevent="handleMessage">
            <button class="btn btn-outline-warning" type="button" id="button-addon2" @click="handleMessage">Button</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from "../composables/getUser"
import useCollection from "../composables/useCollection"
import {timestamp} from "../firebase/config"

export default {
    setup(){
        let message = ref("");
        let {user} = getUser();
        let {error, addDocument} = useCollection();

        let handleMessage = async() =>{
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: timestamp() 
            }
            await addDocument(chat);
            message.value = ""
        }

        return {message, handleMessage, error, addDocument}
    }
}
</script>

<style>

</style>