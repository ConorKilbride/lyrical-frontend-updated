<template>
<div>
    <b-card>

        <img :src="song.album.cover"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2 genreCard paddingTop">

        <b-card-text>
            <!-- <p class="text-center textWhite"><b>Artist Name</b></p> -->
            <!-- <router-link class="text-center textWhite" to="artist_show">{{ artist.name }}</router-link> -->
            <p>Title: <router-link class="text-center" :to="{ name: 'song_show', params:{ _id: song._id }}">{{ song.title }}</router-link></p>
            <p>Description: {{song.description}} </p>
            <p>Length: {{song.lenght[0]}} minutes </p>
            <!-- <p> {{song.album[0]}} </p> -->


        </b-card-text>

    </b-card>
</div> 
</template>

<script>
export default {
    name: 'SongCard',
    props: {
        song: Object 
    }
}
</script>

<style>

</style>

