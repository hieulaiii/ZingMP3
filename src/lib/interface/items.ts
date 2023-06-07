export interface IBanner {
    banner?: string;
    cover?: string;
    description?: string;
    encodeId: string;
    ispr?: number;
    link?: string;
    target?: string;
    title?: string;
    type?: number;
}

export interface IArtists {
    id: string;
    name: string;
    link: string;
    spotlight: boolean;
    alias: string;
    thumbnail: string;
    thumbnailM: string;
    isOA: boolean;
    isOABrand: boolean;
    playlistId: string;
    totalFollow: number;
}

export interface IAlbum {
    encodeId: string;
    title: string;
    thumbnail: string;
    isoffical: boolean;
    link: string;
    isIndie: boolean;
    releaseDate: string;
    sortDescription: string;
    releasedAt: number;
    genreIds: string[];
    PR: boolean;
    artists: IArtists[];
    artistsNames: string;
}

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

export interface IStreaming {
    128: string;
    320: string;
}

export interface ISuggestions {
    type: number;
    title: string;
    id: string;
    hasVideo: boolean;
    thumb: string;
    thumbVideo: string;
    duration: number;
    link: string;
    modifiedTime: number;
    lyricLink: string;
    lyricId: string;
    downloadTypes: string;
    orgMD5: string;
    userId: number;
    euId: string;
    privacy: number;
    hLyricVersion: number;
    releaseTime: number;
    downloadStatus: number;
    status: number;
    playStatus: number;
    artists: {
        type: number;
        id: string;
        oaType: number;
        artistType: number;
        name: string;
        aliasName: string;
        avatar: string;
        link: string;
        playlistId: number;
        followers: number;
    }[];
    genres: IGenres[];
    disSPlatform: number;
    disDPlatform: number;
    boolAtt: number;
    tracking: string;
}

export interface IGenres {
    id: string;
    name: string;
    thumbS: string;
}

export interface ILyric {
    BGMode:number;
    defaultIBGUrls:string[];
    enabledVideoBG:boolean;
    file:string;
    sentences: {
        words:{
            startTime:number;
            endTime:number;
            data:string;
        }[]
    }[]
}