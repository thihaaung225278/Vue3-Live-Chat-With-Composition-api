<template>
    <div class="card-body custom-card-body" ref="msgBox">

        
        <div class="chat-message mb-3" v-for="message in logoutComputedMessages" :key="message.id">
            <span><strong>{{message.name}}: </strong></span>
            <div class="card d-inline-block border-2 border-warning rounded-pill py-1 px-2">
            {{message.message}}
            </div> 
            <div class="date">{{message.created_at}}</div>
        </div>

        
        <div class="chat-message d-flex flex-column justify-content-end align-items-end mb-3" v-for="message in loginComputedMessages" :key="message.id">   
            <div>
                <div class="card d-inline-block border-2 border-danger rounded-pill py-1 px-2">
                {{message.message}}
                </div>
                <span><strong> : {{message.name}}</strong></span>
            </div>
            <div class="date">{{message.created_at}}</div>
        </div>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getUser from "../composables/getUser"
import {db} from "../firebase/config"
import { computed, onUpdated } from '@vue/runtime-core';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default {
    setup(){
        let {user} = getUser();
        let loginMessages = ref([]);
        let logoutMessages = ref([]);

        let msgBox = ref(null);

        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })
        
       
        let loginComputedMessages = computed(() =>{
            return loginMessages.value.map(msg =>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate());
                return {...msg, created_at:formatTime}
            })
        });
        let logoutComputedMessages = computed(() =>{
            return logoutMessages.value.map(msg =>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate());
                return {...msg, created_at:formatTime}
            })
        });

        db.collection("messages").orderBy("created_at").onSnapshot((snap) =>{
            let loginUserMessage=[];
            let logoutUserMessage=[];
            
            snap.docs.forEach((doc) =>{
                
                if(doc.data().created_at){
                    if(user.value.displayName === doc.data().name){
                        let document1 = {...doc.data(), id:doc.id}
                        loginUserMessage.push(document1);
                    }else{
                        let document2 = {...doc.data(), id:doc.id}
                        logoutUserMessage.push(document2);
                    }
                }

            });
            loginMessages.value = loginUserMessage;
            logoutMessages.value = logoutUserMessage;

        });


        return {user, loginMessages, logoutMessages, loginComputedMessages, logoutComputedMessages, msgBox}
    }
}
</script>

<style scoped>
    .date{
        font-weight: bold;
        font-style: italic;
        font-size: 14px;
        color: #aaa;
    }
    * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #ddd;
}

*::-webkit-scrollbar-thumb {
  background-color: #ffc107;
  border-radius: 20px;
  border:2px solid #ddd;
}
</style>