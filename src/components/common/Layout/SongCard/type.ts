import { ISong } from '@/lib/interface';

export interface CustomShow {
    isAlbum?: boolean;
    isKaraoke?: boolean;
    isLike?: boolean;
    isMore?: boolean;
    isSongDuration?: boolean;
}

export interface SongCardProps {
    song: ISong;
    onShow?: () => void;
    onHidden?: () => void;
    customShow?: CustomShow;
}
