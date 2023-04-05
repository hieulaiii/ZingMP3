import React from 'react';

import { ISong } from '@/lib/interface';

import { Wrapper } from './styled';
import { Container } from '../Container';
import { SongCard } from '../SongCard';
import { CustomShow } from '../SongCard/type';

interface DynamicSongCardProps {
    song: ISong;
    children?: React.ReactNode;
    customShow?: CustomShow;
}

interface DynamicSongCardSubComponents {
    Action: React.FC<React.PropsWithChildren<{}>>;
}

export const DynamicSongCard: React.FC<DynamicSongCardProps> & DynamicSongCardSubComponents = ({
    children,
    song,
    customShow,
    ...rest
}) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);
    return (
        <Wrapper {...rest} isHover={isHover}>
            {children}
            <SongCard
                customShow={customShow}
                song={song}
                onShow={() => setIsHover(true)}
                onHidden={() => setIsHover(false)}
            />
        </Wrapper>
    );
};

DynamicSongCard.Action = Container;
