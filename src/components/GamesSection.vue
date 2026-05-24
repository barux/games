<template>
    <div class="gamesList">
        <template v-for="[gameType, games] in getWebsitesMapByType(LegacyEnum.NO)">
            <div class="gamesListElement px-4" v-if="games.length > 0">
                <div class="gamesListHeader">
                    <div class="externalOpenButton mb-3">
                        <button class="btn btn-outline-primary" @click="openCategoryInNewTab(gameType, LegacyEnum.NO)">
                            <i class="ri-external-link-line"></i>
                        </button>
                    </div>
                    <div class="text-center mb-3">
                        {{ $t(`gameType.${gameType}`) }}
                    </div>
                </div>
                <div v-for="website in games" class="mx-1">
                    <div>
                        <a :href="website.url" target="_blank" class="link-success">
                            <span>{{ website.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <div class="d-flex justify-content-center align-items-center w-50 mt-4" id="collapseButton">
        <div class="w-50">
            <button class="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse"
                data-bs-target="#legacyGames">
                Mostra giochi legacy
            </button>
        </div>
    </div>
    <div class="gamesList collapse" id="legacyGames">
        <template v-for="[gameType, games] in getWebsitesMapByType(LegacyEnum.YES)">
            <div class="gamesListElement px-4" v-if="games.length > 0">
                <div class="gamesListHeader">
                    <div class="externalOpenButton mb-3">
                        <button class="btn btn-outline-primary" @click="openCategoryInNewTab(gameType, LegacyEnum.YES)">
                            <i class="ri-external-link-line"></i>
                        </button>
                    </div>
                    <div class="text-center mb-3">
                        {{ $t(`gameType.${gameType}`) }}
                    </div>
                </div>
                <div v-for="website in games" class="mx-1">
                    <div>
                        <a :href="website.url" target="_blank" class="link-success">
                            <span>{{ website.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Website, GameType, LegacyEnum } from '@/utils/types';
import { getWebsites, getWebsitesMapByType } from '@/utils/utils';
import { createTooltip } from '@/utils/tooltip';

export default defineComponent({
    data() {
        return {
            showLegacy: false,

            websites: getWebsites(LegacyEnum.BOTH),
            websitesMapByType: getWebsitesMapByType(LegacyEnum.BOTH),

            LegacyEnum: LegacyEnum,
        }
    },
    methods: {
        getWebsites,
        getWebsitesMapByType,
        openCategoryInNewTab(gameType: GameType, legacy: LegacyEnum = LegacyEnum.NO) {
            getWebsitesMapByType(legacy).get(gameType)!.forEach((game: Website) => {
                window.open(game.url, '_blank');
            });
        },
    },
    mounted() {
        const openInAnotherTabButtons = document.querySelectorAll('.externalOpenButton button');
        openInAnotherTabButtons.forEach((button: Element) => {
            createTooltip(button, this.$t('openInAnotherTab'));
        });
    }
})
</script>

<style>
/* mobile */
@media screen and (max-width: 1400px) {
    .gamesList {
        display: flex;
        flex-direction: column;
        align-items: start;
        /* margin-top: 1em; */
    }

    .gamesListElement {
        padding-top: 1em;
        padding-bottom: 1em;
        width: 100%;
    }

    .gamesListElement:not(:last-child) {
        border-bottom: 1px solid #5e5e5e;
    }

    .gamesListHeader {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .externalOpenButton {
        margin-left: 2em;
    }
}

/* desktop */
@media screen and (min-width: 1400px) {
    .gamesList {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: start;
        /* margin-top: 2em; */
    }

    .gamesListHeader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>