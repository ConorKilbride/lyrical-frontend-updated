<template>
    <div>
        <b-card>

            <img :src="album.cover"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 5rem; max-height: 5rem;"
            class="mb-2 genreCard paddingTop">

            
            <p>Title: <router-link class="text-center" :to="{ name: 'album_show', params:{ _id: album._id }}">{{ album.title }}</router-link></p>
            <p>Artist: <router-link class="text-center" :to="{ name: 'artist_show', params:{ _id: album.artist._id }}">{{ album.artist.name }}</router-link></p>
            <p>Genre: {{ album.genre }}</p>

        </b-card>
    </div> 
</template>

<script>
export default {
    name: 'EditorsChoiceCard',
    props: {
        album: Object,
        artist: Object
    }
}
</script>

<style>

</style>

