<template>
    <b-container>

      <h2 class="textWhite">This is the Artist page</h2>
        
      <div>
        <b-col>
          <b-row cols="3" class="padding">
            <!-- <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-2 genreCard paddingTop"
            >
                <b-card-text>
                    <router-link class="text-center textWhite" to="/album">Album</router-link>
                </b-card-text>
            </b-card> -->
            <SingleArtist 
              v-for="artist in artists"
              :key="artist._id"
              :artist="artist"
            />
          </b-row>
        </b-col>
    </div> 

    </b-container>
</template>

<script>
import SingleArtist from '@/components/SingleArtist.vue'
import axios from 'axios';
//const LYRICAL_URL = "http://localhost:3000";
// import ArtistCard from './components/ArtistCard.vue'

export default {
  name: 'Artist',
  components: {
    SingleArtist,
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {
      artist: {}
    }
  },
  mounted() {
        this.getArtist()
    },
  methods:{
     getArtist(){
        axios
        .get(`http://localhost:3000/artist/${this.$route.params._id}`)
        .then((response) => {
        console.log(response.data)
            this.artist = response.data
        })
        .catch(error => console.log(error))
     }
  }
}

</script>

<style>

</style>