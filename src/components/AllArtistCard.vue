<template>
<div>
    <b-card
        img :src="artist.picture"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100rem;"
        class="mb-2 genreCard"
    >
        <b-card-text>
            <!-- <p class="text-center textWhite"><b>Artist Name</b></p> -->
            <!-- <router-link class="text-center textWhite" to="/artist">{{ artist.name }}</router-link> -->
            <router-link class="text-center textWhite" :to="{ name: 'artists_show', params:{ artist: _id }}">{{ artist.name }}</router-link>
        </b-card-text>
    </b-card>
</div> 
</template>

<script>
export default {
    name: 'AllArtistCard',
    props: {
        artist: Object 
    }
}
</script>

<style>

</style>

