<template>
    <div id="main" class="d-flex flex-column">
        <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1">
            <HeaderBanner />
            <div class="text-warning text-center">
                {{ $t('popupInfoPrompt') }}
            </div>
            <QuickOpen />
            <GamesSection />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue';
import GamesSection from './components/GamesSection.vue';
import HeaderBanner from './components/HeaderBanner.vue';
import { useI18nStore } from './stores/i18n';
import QuickOpen from './components/QuickOpen.vue';

export default defineComponent({
    components: {
        Footer,
        GamesSection,
        HeaderBanner,
        QuickOpen,
    },
    data() {
        return {
            i18nStore: useI18nStore(),
        }
    },
    mounted() {
        this.i18nStore.$t = this.$t;
    },
})
</script>

<style>
#main {
    min-height: 100dvh;
    background-color: #252526;
    color: antiquewhite;
}

/* mobile */
@media screen and (max-width: 1400px) {
    #main {
        padding: 2em;
        padding-bottom: 0%;
    }
}
</style>