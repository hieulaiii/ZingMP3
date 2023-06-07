import React from 'react';

import { Container } from '@/components/common/Layout';

import { InfoCD, RunLyric } from './components';
import { ILyricFormat } from '../../type';

interface LyricSongProps {
    lyric: ILyricFormat[];
}
//before:(absolute w-full h-[50px] top-0 bg-white)
export const LyricSong: React.FC<LyricSongProps> = ({ lyric }) => (
    <Container tw="w-full h-[calc(100vh - 160px)] items-center py-10">
        <Container tw="w-[880px]">
            <InfoCD />
        </Container>
        <Container tw="w-full h-full block relative z-[2] overflow-x-auto ">
            {lyric && lyric.length > 0 && <RunLyric lyric={lyric} />}
        </Container>
    </Container>
);
