<template>
    <b-container>
        
        <div class="row">

            <div class="col-4">
                <p></p>
            </div>

            <div class="textWhite text-center col-4">
                <h2> <b> {{song.title}} </b> </h2>
                <p> {{ song.lyrics }}</p>
            </div>

            <div class="col-4">
            </div>

        </div>

    </b-container>
</template>

<script>
import axios from 'axios';
//const LYRICAL_URL = "http://localhost:3000";
//import ArtistCard from './components/ArtistCard.vue'

export default {
  name: 'SongShow',
  components: {
  },
  data(){
    return {
      song: {}
    }
  },
  mounted() {
        this.getSong()
    },
  methods:{
     getSong(){
        axios
        .get(`http://localhost:3000/song/${this.$route.params._id}`)
        .then((response) => {
        console.log(response.data)
            this.song = response.data
        })
        .catch(error => console.log(error))
     }
  }
}

</script>

<style>

</style>