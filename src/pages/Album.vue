<template>
    <b-container>

      <h2 class="textWhite">This is the Album page</h2>
        
      <div>
        <b-col>
          <b-row cols="3" class="padding">
            <AlbumCard
            v-for="album in albums"
            :key="album.title"
            :album="album"
            />
          </b-row>
        </b-col>
    </div> 

    </b-container>
</template>

<script>
import axios from 'axios';
import AlbumCard from '@/components/AlbumCard.vue'

export default {
  name: 'Albums',
  components: {
    AlbumCard,
  },
  /*props: {
    loggedIn: Boolean
  },*/
  data(){
    return {
      albums: []
    }
  },
  mounted() {
        axios.get('http://localhost:3000/album/')
        .catch(error => console.log(error))
    },
  methods:{
    allAlbums(){
      axios.get('http://localhost:3000/album/')
            .then((response) => {
            console.log(response.data.data)
                this.albums = response.data.data
            })
            .catch(error => console.log(error))
    }
  }
}

</script>

<style>

</style>