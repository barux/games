<template>
    <div id="main" class="d-flex flex-column">
        <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1">
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
import { useI18nStore } from './stores/i18n';
import QuickOpen from './components/QuickOpen.vue';

export default defineComponent({
    components: {
        Footer,
        GamesSection,
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
    padding-inline: 2.5rem;
}

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 1199.98px) {
    #main {
        padding-inline: 2rem;
        padding-top: 2rem;
    }
}

/* Mobile */
@media screen and (max-width: 767.98px) {
    #main {
        padding-inline: 1.25rem;
        padding-top: 1.25rem;
    }
}
</style>
