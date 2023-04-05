import React from 'react';

import { useAtomValue } from 'jotai';

import { Container } from '@/components/common/Layout';
import { songPlaying } from '@/lib/states';

import { ActionMore, DashboardSong, InfoSongPlaying } from './components';

export const ControlPlayer: React.FC = () => {
    const songPlayingValue = useAtomValue(songPlaying);
    return (
        <Container
            tw="h-[90px] bg-layout-player border-t border-whiteAlpha-10 px-5 
        fixed bottom-0 left-0 right-0 justify-between items-center"
        >
            {songPlayingValue && (
                <>
                    <Container tw="w-[30%]">
                        <InfoSongPlaying song={songPlayingValue} />
                    </Container>
                    <Container tw="w-full max-w-[40vw]">
                        <DashboardSong />
                    </Container>
                    <Container tw="w-[30%]">
                        <ActionMore />
                    </Container>
                </>
            )}
        </Container>
    );
};
