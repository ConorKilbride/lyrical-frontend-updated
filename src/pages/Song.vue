<template>
    <b-container>
        <div class="row">

            <div class="col-3">
                <p></p>
            </div>

            <div class="textWhite text-center col-6">
                <h2>This is the Song page</h2>

                <h3>{{ song.title }}</h3>
                <h3>{{ song.lenght }}</h3>
                <h4>{{ song.year }}</h4>
                <p> {{ song.lyrics }}</p>
            </div>
            <div class="col-3">
            </div>

        </div>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SongPage',
  components: {
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {
        song: []
    }
  },
  mounted(){
    this.getSongs()
        axios.get('http://localhost:3000/song/{:_id}')
            .then((response) => {
            console.log(response.data.data)
                this.countries = response.data.data
            })
            .catch(error => console.log(error))
},
  methods:{
  }
}

</script>

<style>

</style>