<template>
    <b-container>

      <h2 class="textWhite">Artists</h2>

      <!-- I tried adding a get artist by name method to our API, searching name doesn't give an error but says there's no artist with that name, wasn't sure how to fix it. -->
      <div class="search-box">
            <input
                type="text"
                v-model="term"
                placeholder="Search Artists"
                v-on:keyup.enter="searchArtists()"
            />
            <b-button
                class="float-right"
                variant="primary"
                @click="searchArtists()"
                >Search
                </b-button> 
        </div>
        
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
  name: 'ArtistIndex',
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
    },
    searchArtists() {
            if(!this.term){
                    alert("Please enter a search term!")
                    return
                }

            axios.get(`http://localhost:3000/artist/${this.term}?fullText=true`)
            .then(response => {
                console.log(response.data)
                this.countries = response.data
            })
            .catch(error => console.log(error))

            this.term = ""
        }
  }
}

</script>

<style>

</style>