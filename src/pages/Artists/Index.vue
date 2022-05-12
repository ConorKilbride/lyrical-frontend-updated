<template>
    <b-container>

      <h2 class="textWhite">Artists</h2>
        
      <div>
        <b-col>
          <b-row cols="3" class="padding">
            <AllArtistCard
              v-for="artist in artists"
              :key="artist._id"
              :artist="artist"
            />

            <div class="col-1"></div>
          
          </b-row>
        </b-col>
    </div> 

    </b-container>
</template>

<script>
import axios from 'axios'
import AllArtistCard from '@/components/AllArtistCard.vue'

export default {
  name: 'ArtistsIndex',
  components: {
    AllArtistCard,
  },
  /*props: {
    loggedIn: Boolean
  },*/
  data(){
    return {
      artists: []
    }
  },
  mounted() {
        this.allArtists()
    },
  methods:{
    allArtists(){
      axios.get('http://localhost:3000/artist')
            .then((response) => {
            console.log(response.data)
                this.artists = response.data
            })
            .catch(error => console.log(error))
    }
  }
}

</script>

<style>

</style>