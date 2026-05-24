<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div id="adBanner">
            <span>{{ $t('checkGuessTheSongPrompt')}}</span>
            <a @click="openInNewTab" class="text-light" style="cursor: pointer;">GuessTheSong</a>
            <span>!</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        openInNewTab() {
            const guessTheSongUrl = 'https://guessthesong.barux.dev/';
            window.open(guessTheSongUrl, '_blank');
        }
    }
})

</script>

<style>
div#adBanner {
    background-color: rgb(4, 80, 96);
    color: #37d1f6;
    padding: 1em;
    margin: 1em;
    border: #087990 1px solid;
    border-radius: 1rem;
    text-align: center;
}
</style>