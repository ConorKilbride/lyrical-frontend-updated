<template>
    <div>
        <b-card>

            <img :src="song.album.cover"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 18rem;"
            class="mb-2 genreCard paddingTop">

            <b-card-text>
                <!-- <p class="text-center textWhite"><b>Artist Name</b></p> -->
                <!-- <router-link class="text-center textWhite" to="artist_show">{{ artist.name }}</router-link> -->
                <router-link class="text-center" :to="{ name: 'song_show', params:{ _id: song._id }}">{{ song.title }}</router-link>
            </b-card-text>

        </b-card>
    </div> 
</template>

<script>
export default {
    name: 'NewReleasesCard',
    props: {
        song: Object 
    }
}
</script>

<style>

</style>

