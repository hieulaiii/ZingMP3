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
