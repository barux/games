<template>
    <div class="gamesList">
        <template v-for="[gameType, games] in getWebsitesMapByType(LegacyEnum.NO)">
            <div class="gamesListElement" v-if="games.length > 0">
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
    <div id="collapseButton">
        <div class="collapseButtonInner">
            <button class="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse"
                data-bs-target="#legacyGames">
                Mostra giochi legacy
            </button>
        </div>
    </div>
    <div class="gamesList collapse" id="legacyGames">
        <template v-for="[gameType, games] in getWebsitesMapByType(LegacyEnum.YES)">
            <div class="gamesListElement" v-if="games.length > 0">
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

<style scoped>
.gamesList {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.25rem;
    width: 100%;
}

.gamesListHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.gamesListElement {
    padding-inline: 0.25rem;
}

#collapseButton {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem 0 1.5rem;
}

.collapseButtonInner {
    width: min(24rem, 50%);
}

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 1199.98px) {
    .gamesList {
        display: block;
        column-count: 2;
        column-gap: 0.5rem;
    }

    .gamesListElement {
        display: inline-block;
        break-inside: avoid;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        border-bottom: 1px solid #5e5e5e;
    }

    .gamesListHeader {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .externalOpenButton {
        margin-left: 2rem;
    }
}

/* Mobile */
@media screen and (max-width: 767.98px) {
    .gamesList {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    .gamesListElement {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .gamesListElement:not(:last-child) {
        border-bottom: 1px solid #5e5e5e;
    }

    .gamesListHeader {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .externalOpenButton {
        margin-left: 1rem;
    }

    #collapseButton {
        margin-top: 1.5rem;
        margin-bottom: 1.25rem;
    }

    .collapseButtonInner {
        width: 100%;
    }
}
</style>
