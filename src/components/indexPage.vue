<template>
  <div>
    <b-btn @click="clickOn">Click</b-btn>
    <p v-if="socketStatus">{{ testMessage }} - {{ socketStatusText }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'indexPage',
  data () {
    return {
    testMessage: 'Ahihi',
    socketStatus: false,
    socketStatusText:''
    }
  },
  sockets:{
    connect(){
      console.log('Socket Client Connected')
      this.socketStatus = true;
    },
    customEmit: function(val){
      console.log(`this method was fired by the socket server. ${val.hello}`)
    },
    voiceEmitReq(data){
      this.socketStatusText = data.imes
      console.log(data.imes);
    }
  },
  methods: {
      clickOn(){
        this.testMessage = 'testMessage!'
      }
  }
}
</script>
