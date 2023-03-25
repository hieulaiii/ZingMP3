import { IAlbum, IArtists } from './items';

export interface ISong {
    encodeId: string;
    title: string;
    alias: string;
    isOffical: boolean;
    username: string;
    artistsNames: string;
    artists: IArtists[];
    isWorldWide: boolean;
    thumbnailM: string;
    link: string;
    thumbnail: string;
    duration: number;
    zingChoice: boolean;
    isPrivate: boolean;
    preRelease: boolean;
    releaseDate: number;
    genreIds: string[];
    album: IAlbum;
    indicators: any[];
    isIndie: boolean;
    streamingStatus: number;
    allowAudioAds: boolean;
    hasLyric: boolean;
    rakingStatus: number;
    score: number;
    totalTopZing: number;
    artist: IArtists;
}
