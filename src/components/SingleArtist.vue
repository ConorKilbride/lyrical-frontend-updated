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
            <p>Name: {{ artist.name }}</p>
        </b-card-text>
    </b-card>
</div> 
</template>

<script>
export default {
    name: 'SingleArtist',
    props: {
        artist: Object 
    }
}
</script>

<style>

</style>

