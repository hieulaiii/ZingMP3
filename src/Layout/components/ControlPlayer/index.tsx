import React from 'react';

import { useAtomValue } from 'jotai';
import tw from 'twin.macro';

import { Container } from '@/components/common/Layout';
import { openLyric, songPlaying } from '@/lib/states';

import { ActionMore, DashboardSong, InfoSongPlaying } from './components';

const ControlPlayerWrapper = tw(
    Container
)`h-[90px] bg-layout-player border-t border-whiteAlpha-10 px-5 
fixed bottom-0 left-0 right-0 justify-between items-center z-20`;

export const ControlPlayer: React.FC = () => {
    const songPlayingValue = useAtomValue(songPlaying);
    const openLyricValue = useAtomValue(openLyric);
    return (
        <ControlPlayerWrapper css={[openLyricValue && tw`!bg-transparent`]}>
            {songPlayingValue && (
                <>
                    <Container tw="w-[104px] lg:w-[30%]">
                        <InfoSongPlaying song={songPlayingValue} />
                    </Container>
                    <Container tw="w-full px-6 lg:px-0 lg:max-w-[40vw]">
                        <DashboardSong />
                    </Container>
                    <Container tw="w-[104px] lg:w-[30%]">
                        <ActionMore />
                    </Container>
                </>
            )}
        </ControlPlayerWrapper>
    );
};
