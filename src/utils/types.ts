import { v4 as uuidv4 } from 'uuid';

export enum LegacyEnum {
    YES = "YES",
    NO = "NO",
    BOTH = "BOTH",
}

export enum GameType {
    WORDS = "WORDS",
    GEOGRAPHIC = "GEOGRAPHIC",
    GAMES = "GAMES",
    LOL = "LOL",
    MUSIC_FILM = "MUSIC_FILM",
    HEARDLE = "HEARDLE",
    MISC = "MISC",
    SPORT = "SPORT",
    TO_BE_CONFIRMED = "TO_BE_CONFIRMED",
    BARUX = "BARUX",
    FEDERICHEDDU = "FEDERICHEDDU",
}
export interface WebsiteInterface {
    name: string;
    url: string;
    type: GameType;
    legacy: boolean;
}

export class Website implements WebsiteInterface {
    name: string;
    url: string;
    type: GameType;
    legacy: boolean;

    constructor(name: string, url: string, type: GameType,legacy?: boolean) {
        this.name = name;
        this.url = url;
        this.type = type;
        this.legacy = legacy || false;
    }
}