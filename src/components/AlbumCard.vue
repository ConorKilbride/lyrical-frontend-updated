<template>
    <div>
        <b-card
            img :src="album.cover"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 18rem;"
            class="mb-2 genreCard paddingTop"
        >
            <b-card-text>
                <router-link class="text-center textWhite" to="/song">Song 1</router-link>
                <p class="text-center textWhite"><b>Song 2</b></p>
                <p class="text-center textWhite"><b>Song 2</b></p>
                <p class="text-center textWhite"><b>Song 2</b></p>
            </b-card-text>
        </b-card>
    </div> 
</template>

<script>
export default {
    name: 'AlbumCard',
    props: {
        artist: Object 
    }
}
</script>

<style>

</style>

