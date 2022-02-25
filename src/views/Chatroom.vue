<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow mt-5">

          <ChatroomHeader />

          <ChatroomWindow />

          <ChatroomMessageForm />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatroomMessageForm from '../components/ChatroomMessageForm'
import ChatroomWindow from '../components/ChatroomWindow'
import ChatroomHeader from '../components/ChatroomHeader'
export default {
  components: {
    ChatroomMessageForm,
    ChatroomWindow, ChatroomHeader },

}
</script>

<style>
  .username{
    font-weight: bold;
  }
  .email{
    font-size: 16px;
    font-weight: bold;
    color: #bbb;
  }
  .custom-card-body{
    height: 400px;
    max-height: 400px;
    overflow: auto;
  }
</style>