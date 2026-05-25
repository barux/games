<template>
    <div class="quick-open-container">
        <span>{{ $t('quickOpen.today', { day: dayName }) }}</span>
        <button v-for="category in categoryOrder" :key="category" @click="openCategory(category)"
            class="btn btn-outline-light">
            {{ $t(`gameType.${category}`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GameType, LegacyEnum, Website } from '@/utils/types';
import { getWebsitesMapByType } from '@/utils/utils';

export default defineComponent({
    name: 'QuickOpen',
    data() {
        return {
            currentDay: new Date().getDay()
        };
    },
    computed: {
        isEvenDay(): boolean {
            // Start from Monday: 1 = Monday, 2 = Tuesday, ..., 7 = Sunday
            const adjustedDay = this.currentDay === 0 ? 7 : this.currentDay;
            return adjustedDay % 2 === 0;
        },
        dayName(): string {
            return this.$t(`days.${this.currentDay}`);
        },
        categoryOrder(): GameType[] {
            if (this.isEvenDay) {
                // Even day order: SPORT -> HEARDLE -> MUSIC_FILM -> GAMES -> MISC
                return [GameType.SPORT, GameType.HEARDLE, GameType.MUSIC_FILM, GameType.MISC, GameType.GAMES, GameType.LOL];
            } else {
                // Odd day order: HEARDLE -> MUSIC_FILM -> SPORT -> GAMES -> MISC
                return [GameType.HEARDLE, GameType.MUSIC_FILM, GameType.SPORT, GameType.MISC, GameType.GAMES, GameType.LOL];
            }
        }
    },
    methods: {
        openCategory(gameType: GameType) {
            const websitesMap = getWebsitesMapByType(LegacyEnum.NO);
            const games = websitesMap.get(gameType);
            if (games) {
                games.forEach((game: Website) => {
                    window.open(game.url, '_blank');
                });
            }
        }
    }
});
</script>

<style scoped>
.quick-open-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
}
</style>
