<template>
    <b-container>
        <div class="row">

            <div class="col-3">
                <p></p>
            </div>

            <div class="textWhite text-center col-6">
                <h2>This is the All Songs page</h2>

                <!-- <h3>{{ song.title }}</h3>
                <h3>{{ song.lenght }}</h3>
                <h4>{{ song.year }}</h4>
                <p> {{ song.lyrics }}</p> -->
            </div>

            <div>
        <b-col>
          <b-row cols="3" class="padding">
            <SongCard
              v-for="song in songs"
              :key="song._id"
              :song="song"
            />

            <div class="col-1"></div>
          
          </b-row>
        </b-col>
      </div> 

        </div>
    </b-container>
</template>

<script>
import axios from 'axios'
import SongCard from '@/components/SongCard.vue'

//This was the start of trying to limit the amount of data returned in an array before I found a simpler solution.

// var countdown = function(value) {
//     if (value > 0) {
//         console.log(value);
//         return countdown(value - 1);
//     } else {
//         return value;
//     }
// };
// countdown(10);


export default {
  name: 'AllSongs',
  components: {
    SongCard
  },
  props: {
    //loggedIn: Boolean
  },
  data(){
    return {
        songs: [],
    }
  },
  mounted(){
    this.getSong()
  },
  methods:{
    getSong(){
        axios.get('http://localhost:3000/song')
            .then((response) => {
            console.log(response.data)
                this.songs = response.data
            })
            .catch(error => console.log(error))
    },

  }
}

</script>

<style>

</style>