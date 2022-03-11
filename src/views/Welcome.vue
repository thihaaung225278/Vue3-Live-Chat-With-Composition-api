<template>
  <div v-if="showLogin">
    <Login @enterChatroom="enterChatroom"></Login>
    <p class="text-center mt-5">
      Create a new User.
      <a href="#" @click="showLogin=!showLogin"><strong>Signup Account</strong></a>
    </p>
  </div>
  <div v-else>
    <Signup></Signup>
    <p class="text-center mt-5">
      Already Signup? 
      <a href="#" @click="showLogin=!showLogin"><strong>Login Account</strong></a>
    </p>
  </div>
</template>

<script>

import Signup from '../components/Signup'
import Login from '../components/Login'
import { ref } from '@vue/reactivity'
import {useRouter} from "vue-router"

export default {
  name: 'Home',
  components: {
    Signup,
    Login,  
  },
  setup(){
    let showLogin = ref(true);
    let router = useRouter();

    let enterChatroom = () =>{
      router.push({name:'Chatroom'});
    }

    return {showLogin, enterChatroom}
  }
}
</script>
