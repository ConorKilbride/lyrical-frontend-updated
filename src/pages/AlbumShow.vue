<template>
    <b-container>
        
        <div class="row">

            <div class="col-4">
                <p></p>
            </div>

            <div class="textWhite text-center col-4">
                <h2> <b> {{album.title}} </b> </h2>
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
  name: 'AlbumShow',
  components: {
  },
  data(){
    return {
      album: {}
    }
  },
  mounted() {
        this.getAlbum()
    },
  methods:{
     getAlbum(){
        axios
        .get(`http://localhost:3000/album/${this.$route.params._id}`)
        .then((response) => {
        console.log(response.data)
            this.album = response.data
        })
        .catch(error => console.log(error))
     }
  }
}

</script>

<style>

</style>