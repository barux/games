import { GameType, LegacyEnum, Website } from "./types";

const websites: Array<Website> = [
    new Website("Heardle Duos", "https://duos.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle 2010s", "https://10s.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle 2000s", "https://00s.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Pop", "https://pop.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Rap", "https://hiphop.heardlegames.xyz", GameType.HEARDLE),
    new Website("Heardle EDM", "https://electronica.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle Love", "https://love.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Solo", "https://solo.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Lyrical", "https://lyrical.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Hits", "https://hits.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle Disney", "https://disney.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle ITA", "https://heardle.it", GameType.HEARDLE),
    new Website("Heardle Indie", "https://indie.heardle.it/", GameType.HEARDLE),
    new Website("Heardle ITA 2", "https://heardleitalia.com/", GameType.HEARDLE),

    new Website("Guesstheaudio", "https://guesstheaudio.com", GameType.MUSIC_FILM),
    new Website("Bandle", "https://bandle.app", GameType.MUSIC_FILM),
    new Website("Spotle", "https://spotle.io", GameType.MUSIC_FILM),
    new Website("Crosstune", "https://crosstune.io/", GameType.MUSIC_FILM),
    new Website("Lyricle", "https://www.lyricle.app", GameType.MUSIC_FILM),
    new Website("Musicvidle", "https://www.musicvidle.com", GameType.MUSIC_FILM),
    new Website("SongLess", "https://lessgames.com/songless", GameType.MUSIC_FILM),
    new Website("Themely", "https://www.themely.se/", GameType.MUSIC_FILM),
    new Website("Spotle Movies", "https://spotle.movie/", GameType.MUSIC_FILM),

    new Website("Top 10", "https://playfootball.games/football-tenable", GameType.SPORT),
    new Website("Top 10 v2", "https://futbol-11.com/futbol-top10", GameType.SPORT),
    new Website("Career", "https://playfootball.games/career-path-challenge", GameType.SPORT),
    new Website("Grid", "https://futbol-11.com/futbol-grid", GameType.SPORT),
    new Website("Impostor", "https://futbol-11.com/futbol11-impostor", GameType.SPORT),
    new Website("Countdown", "https://playfootball.games/futbol-list-a/", GameType.SPORT),
    new Website("Bingo", "https://playfootball.games/football-bingo/daily", GameType.SPORT),

    new Website("AniGuessr", "https://aniguessr.com", GameType.MISC),

    new Website("Gamedle", "https://www.gamedle.wtf", GameType.GAMES),
    new Website("GuessThe.Game", "https://guessthe.game", GameType.GAMES),
    new Website("Rankdle", "https://rankdle.com", GameType.GAMES),

    new Website("Loldle", "https://loldle.net", GameType.LOL),
    new Website("LoL Buildle", "https://www.buildle.gg", GameType.LOL),
    new Website("Lolix", "https://lolix.gg/minigames", GameType.LOL),

    new Website("GeoGrid", "https://www.geogridgame.com", GameType.BARUX),
    new Website("BikeGrid", "https://bikegrid.escapecollective.com/", GameType.BARUX),
    new Website("GuessTheRider", "https://guesstherider.com/", GameType.BARUX),

    new Website("Guess NBA Player", "https://poeltl.nbpa.com", GameType.FEDERICHEDDU),
    new Website("NBA Things", "https://hoopgrids.com", GameType.FEDERICHEDDU),
    new Website("Guess Jumpshot", "https://www.batter-up.app/jumpshot/", GameType.FEDERICHEDDU),
    new Website("TimeQuiz", "https://www.hoopgoat.com/quiz/", GameType.FEDERICHEDDU),
    new Website("GuessPlayerBalorda", "https://craftednba.com/games/guess-the-player", GameType.FEDERICHEDDU),
];

const legacyWebsites: Array<Website> = [
    new Website("GeoGuessr", "https://geotastic.net/home", GameType.GEOGRAPHIC),
    new Website("Travle", "https://travle.earth", GameType.GEOGRAPHIC),
    new Website("Flagle", "https://flagle-game.com", GameType.GEOGRAPHIC),
    new Website("Globle", "https://globle-game.com/game", GameType.GEOGRAPHIC),
    new Website("Globle Capitals", "https://globle-capitals.com/game", GameType.GEOGRAPHIC),
    new Website("Timeguessr", "https://timeguessr.com/roundonedaily", GameType.GEOGRAPHIC),
    new Website("Worldle", "https://worldle.teuteuf.fr", GameType.GEOGRAPHIC),
    new Website("Chronophoto", "https://www.chronophoto.app/game.html", GameType.GEOGRAPHIC),

    new Website("Wordle IT", "https://pietroppeter.github.io/wordle-it", GameType.WORDS),
    new Website("Old Quordle", "https://it.quordle.com/#/", GameType.WORDS),
    new Website("Dordle", "https://wordleplay.com/it/dordle", GameType.WORDS),
    new Website("New Quordle", "https://wordleplay.com/it/quordle", GameType.WORDS),
    new Website("Octordle", "https://wordleplay.com/it/octordle", GameType.WORDS),
    new Website("Wordle ENG", "https://www.nytimes.com/games/wordle/index.html", GameType.WORDS),
    new Website("Weaver", "https://wordwormdormdork.com", GameType.WORDS),
    new Website("Betweenle", "https://betweenle.com", GameType.WORDS),
    new Website("Wafflegame", "https://wafflegame.net/daily", GameType.WORDS),
    new Website("Squares", "https://squares.org", GameType.WORDS),
    new Website("Contexto", "https://contexto.me", GameType.WORDS),
    new Website("Cruciverba", "https://cruciverba.devarai.com/authors", GameType.WORDS),
    new Website("Password Game", "https://neal.fun/password-game", GameType.WORDS),
    new Website("Symble", "https://www.symble.app", GameType.WORDS),
    new Website("Pixletters", "https://pixletters.com", GameType.WORDS),

    new Website("Isaacle", "https://isaacle.net", GameType.GAMES),

    new Website("LoLDoku", "https://loldoku.com", GameType.LOL),
    new Website("Guess the LoL Player", "https://www.esportle.net", GameType.LOL),
    new Website("Guess the LoL Squad", "https://asukachikaru.github.io/lcs-lec-team-quiz", GameType.LOL),
    new Website("Guess the LoL", "https://guess-the-lol.com", GameType.LOL),
    new Website("Guess Champ by Sound", "https://lynge.tv/listen", GameType.LOL),

    new Website("Framequiz", "https://www.framequiz.com", GameType.MUSIC_FILM),
    new Website("Melodle", "https://melodle.yesmeno.com", GameType.MUSIC_FILM),
    new Website("Cinenerdle", "https://www.cinenerdle.app", GameType.MUSIC_FILM),
    new Website("Moviedle", "https://likewise.com/games/moviedle", GameType.MUSIC_FILM),
    new Website("Posterdle", "https://likewise.com/games/posterdle", GameType.MUSIC_FILM),
    new Website("NFLXdle", "https://likewise.com/games/nflxdle", GameType.MUSIC_FILM),

    new Website("Heardle Xmas", "https://xmas.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle Emo", "https://emo.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle Disco", "https://disco.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle Movies", "https://movies.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle TV Themes", "https://tv.heardledecades.com", GameType.HEARDLE),
    new Website("Heardle EuroVision", "https://eurovision.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle 1HitWonder", "https://wonders.heardledecades.xyz", GameType.HEARDLE),
    new Website("Heardle Queen", "https://queen.heardlegames.xyz", GameType.HEARDLE),

    new Website("Pokedoku", "https://pokedoku.com", GameType.MISC),
    new Website("Pokegrid", "https://www.pokegrid.net/", GameType.MISC),
    new Website("GuessTheMovie", "https://guessthemovie.name", GameType.MISC),
    new Website("GuessTheLogo", "https://guessthelogo.wtf", GameType.MISC),
    new Website("GuessTheAngle", "https://guesstheangle.wtf", GameType.MISC),
    new Website("Angle", "https://angle.wtf", GameType.MISC),
    new Website("OnePieceDLE", "https://onepiecedle.net", GameType.MISC),
    new Website("GuessTheHouse", "https://guessthe.house", GameType.MISC),
    new Website("AnimeGuess", "https://www.animeguess.moe", GameType.MISC),
    new Website("Narutodle", "https://narutodle.net", GameType.MISC),
    new Website("Pokedle", "https://pokedle.net", GameType.MISC),
    new Website("Guesstheage", "https://guesstheage.org", GameType.MISC),
    new Website("Searchle", "https://searchle.net", GameType.MISC),
    new Website("Stattogories", "https://www.stattogories.com", GameType.MISC),
    new Website("Nerdle", "https://nerdlegame.com", GameType.MISC),
    new Website("Metazooa", "https://metazooa.com/play/game", GameType.MISC),

    new Website("Actorle", "https://actorle.com", GameType.TO_BE_CONFIRMED),
    new Website("Artle", "https://artle.uk", GameType.TO_BE_CONFIRMED),
    new Website("NGA Artle", "https://www.nga.gov/artle.html", GameType.TO_BE_CONFIRMED),

    new Website("Indovina chi", "https://playfootball.games/who-are-ya/big-5", GameType.SPORT),
    new Website("Indovina chi Serie A", "https://playfootball.games/who-are-ya/serie-a", GameType.SPORT),
    new Website("Indovina chi Premier", "https://playfootball.games/who-are-ya/premier-league", GameType.SPORT),
    new Website("Pyramid", "https://futbol-11.com/futbol11-pyramid", GameType.SPORT),
    new Website("Guess Tennis Player", "https://tenizgame.github.io", GameType.SPORT),
    new Website("Clubs", "https://futbol-11.com/futbol11-clubs", GameType.SPORT),
    new Website("Nations", "https://futbol-11.com/futbol11", GameType.SPORT),
    new Website("Legends", "https://futbol-11.com/futbol11-legends", GameType.SPORT),
    new Website("Missing 11", "https://playfootball.games/missing-11/global/", GameType.SPORT),

    new Website("GuessTheBook", "https://guessthebook.app", GameType.BARUX),
];

export function getWebsitesMapByType(legacy: LegacyEnum) {
    return Object.values(GameType).reduce((acc, type) => {
        acc.set(type, getWebsites(legacy).filter(site => site.type === type));
        return acc;
    }, new Map<GameType, Website[]>());
}

export function getWebsites(legacy: LegacyEnum) {
    switch (legacy) {
        case LegacyEnum.YES:
            return legacyWebsites;
        case LegacyEnum.NO:
            return websites;
        case LegacyEnum.BOTH:
            return websites.concat(legacyWebsites);
    }
}