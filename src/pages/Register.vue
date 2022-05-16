<template>
    <b-col>
    <h2></h2>

    <div class="textWhite">
      Username  <input name="username" v-model="username">
      Email: <input type="email" v-model="email" /> <br>
      Country  <input name="country" v-model="country">
      Age  <input name="age" v-model="age">
      Password: <input type="password" v-model="password" />
      <button @click="register()">Submit</button>
    </div>

    <!-- <p class="textWhite">
      You succesfuly registered
    </p> -->

  </b-col>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  components: {
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {
      username:"",
      email:"",
      country:"",
      age:"",
      password:""
      //loggedIn: false
    }
  },
  methods:{
    register(){
       axios
         .post('http://localhost:3000/register', {
           email: this.email,
           password: this.password
         })
        .then(response => {
          // console.log(response.data.token)
          this.$emit('register', response.data.token)
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