<template>
    <div class="card-body custom-card-body">

        
        <div class="chat-message mb-3" v-for="message in logoutMessages" :key="message.id">
            <span><strong>{{message.name}}: </strong></span>
            <div class="card d-inline-block border-2 border-warning rounded-pill py-1 px-2">
            {{message.message}}
            </div> 
            <span>1:00pm</span>
        </div>

        
        <div class="chat-message d-flex justify-content-end align-items-center mb-3" v-for="message in loginMessages" :key="message.id">   
            <span>1:00pm</span>
            <div class="card d-inline-block border-2 border-danger rounded-pill py-1 px-2">
            {{message.message}}
            </div>
            <span><strong> &nbsp; : {{message.name}}</strong></span>
        </div>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getUser from "../composables/getUser"
import {db} from "../firebase/config"

export default {
    setup(){
        let {user} = getUser();
        let loginMessages = ref([]);
        let logoutMessages = ref([]);
        
        console.log(user.value);

        db.collection("messages").orderBy("created_at").onSnapshot((snap) =>{
            let loginUserMessage=[];
            let logoutUserMessage=[];
            
            snap.docs.forEach((doc) =>{

                // console.log(user.value.displayName);
                // console.log(doc.data().name);

                if(user.value.displayName === doc.data().name){
                    let document1 = {...doc.data(), id:doc.id}
                    loginUserMessage.push(document1);
                }else{
                    let document2 = {...doc.data(), id:doc.id}
                    logoutUserMessage.push(document2);
                }

                // let document = {...doc.data(), id:doc.id}
                // loginUserMessage.push(document);
            });
            loginMessages.value = loginUserMessage;
            logoutMessages.value = logoutUserMessage;
        });

        return {user, loginMessages, logoutMessages}
    }
}
</script>

<style>

</style>