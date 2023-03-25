import React from 'react';

import { ISong } from '@/lib/interface';

import { Wrapper } from './styled';
import { Container } from '../Container';
import { SongCard } from '../SongCard';

interface DynamicSongCardProps {
    isSimple?: boolean;
    song: ISong;
    children?: React.ReactNode;
}

interface DynamicSongCardSubComponents {
    Action: React.FC<React.PropsWithChildren<{}>>;
}

export const DynamicSongCard: React.FC<DynamicSongCardProps> & DynamicSongCardSubComponents = ({
    children,
    isSimple = false,
    song,
    ...rest
}) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);
    return (
        <Wrapper {...rest} isHover={isHover}>
            {children}
            <SongCard
                song={song}
                isSimple={isSimple}
                onShow={() => setIsHover(true)}
                onHidden={() => setIsHover(false)}
            />
        </Wrapper>
    );
};

DynamicSongCard.Action = Container;
