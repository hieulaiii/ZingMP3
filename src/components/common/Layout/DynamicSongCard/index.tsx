import React from 'react';

import { useAtomValue } from 'jotai';

import { ISong } from '@/lib/interface';
import { songPlaying } from '@/lib/states';

import { Wrapper } from './styled';
import { ButtonSize } from '../../interaction/ButtonIcon/type';
import { Container } from '../Container';
import { SongCard } from '../SongCard';
import { CustomShow } from '../SongCard/type';

interface DynamicSongCardProps {
    song: ISong;
    children?: React.ReactNode;
    customShow?: CustomShow;
    sizeIcon?: ButtonSize;
    isShowIcon?: boolean;
}

interface DynamicSongCardSubComponents {
    Action: React.FC<React.PropsWithChildren<{}>>;
}

export const DynamicSongCard: React.FC<DynamicSongCardProps> & DynamicSongCardSubComponents = ({
    children,
    song,
    customShow,
    sizeIcon,
    isShowIcon,
    ...rest
}) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);
    const songPlayingValue = useAtomValue(songPlaying);
    return (
        <Wrapper {...rest} isHover={isHover || song.encodeId === songPlayingValue?.encodeId}>
            {children}
            <SongCard
                customShow={customShow}
                song={song}
                sizeIcon={sizeIcon}
                isShowIcon={isShowIcon}
                onShow={() => setIsHover(true)}
                onHidden={() => setIsHover(false)}
            />
        </Wrapper>
    );
};

DynamicSongCard.Action = Container;
