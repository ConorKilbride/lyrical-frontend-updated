<template>
    <b-col>
    <h2></h2>

    <div v-if="!loggedIn" class="textWhite">
      Email: <input type="email" v-model="email" /> <br>
      Password: <input type="password" v-model="password" />
      <button @click="login()">Submit</button>
    </div>

    <p v-else class="textWhite">
      You are logged in
    </p>

    <!--  "email":"test@email.com",
          "password":"passwordtest"  -->


  </b-col>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  components: {
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {
        email:"",
        password:""

      //email: user@lyrical.com
      //password: secret
      
      //loggedIn: false
    }
  },
  methods:{
    login(){
       axios
         .post('http://localhost:3000/login', {
           email: this.email,
           password: this.password
         })
        .then(response => {
          // console.log(response.data.token)
          this.$emit('login', response.data.token)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
}

</script>

<style>

</style>