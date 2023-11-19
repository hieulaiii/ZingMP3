import { ISong } from '@/lib/interface';

import { ButtonSize } from '../../interaction/ButtonIcon/type';

export interface CustomShow {
    isAlbum?: boolean;
    isKaraoke?: boolean;
    isLike?: boolean;
    isMore?: boolean;
    isSongDuration?: boolean;
    isShortTitle?: boolean;
    isShowAddPlaylist?: boolean;
}

export interface SongCardProps {
    song: ISong;
    onShow?: () => void;
    onHidden?: () => void;
    customShow?: CustomShow;
    sizeIcon?: ButtonSize;
    isShowIcon?: boolean;
}
