<template>
  <b-row>
    <b-btn @click="clickOn">Click</b-btn>
    {{ testMessage }}
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'indexPage',
  data () {
    return {
    testMessage: 'Ahihi'
    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log(`this method was fired by the socket server. ${val.hello}`)
    }
  },
  methods: {
      clickOn(){
        this.testMessage = 'testMessage!'
      }
  }
}
</script>
