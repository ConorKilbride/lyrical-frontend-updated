<template>
  <nav class="navbar navbar-expand-lg navBlue">
    <div class="container">
      <a class="navbar-brand nav-link" href="#">Lyrical</a> 
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link white justify-content-between" to="/">Home</router-link>
          <router-link class="nav-link justify-content-between" to="/genres">Genres</router-link>
          <router-link class="nav-link justify-content-between" to="/artists">Artists</router-link>
          <router-link class="nav-link justify-content-between" to="/songs">Songs</router-link>


          <div>
            <button v-if="loggedIn" @click="logout" class="btn btn-outline-info my-2 my-sm-0 btn-sm">Logout</button>
            <router-link v-else class="nav-link justify-content-between" to="/login">Login</router-link>
          </div>

          <div>
            <router-link v-if="!loggedIn" class="nav-link justify-content-between" to="/register">Register</router-link>
            <!-- <router-link v-else class="nav-link justify-content-between" to="/login">Login</router-link> -->
          </div>
        </div>

        <!-- <div class="navbar-nav ml-auto">
          <router-link class="nav-link justify-content-between" to="/login">Login</router-link>
          <button v-if="loggedIn" @click="logout" class="btn btn-outline-info my-2 my-sm-0 btn-sm">Logout</button>
        </div> -->

      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    components: {
    },
    props: {
      loggedIn: Boolean
    },
    data(){
      return {

      }
    },
    methods:{
      logout() {
        this.$emit('logout')
      }
    }
  };
</script>

<style>

</style>