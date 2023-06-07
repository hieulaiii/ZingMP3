import React from 'react';

import { useAtomValue, useSetAtom } from 'jotai';
import lrcParser from 'lrc-parser';

import { useLyric } from '@/lib/hook/song';
import { avgAnalyser, songPlaying } from '@/lib/states';
import { openLyric } from '@/lib/states/lyric';

import { Karaoke, ListPlay, LyricSong } from './components';
import { Span } from './styled';
import { ILyricFormat, TypeActiveStep } from './type';
import { ButtonIcon } from '../common/interaction';
import { Container } from '../common/Layout';

interface LyricProps {
    idSong: string;
}

export const Lyric: React.FC<LyricProps> = ({ idSong }) => {
    const setOpenLyric = useSetAtom(openLyric);
    const { dataLyricFile } = useLyric(idSong);
    const songPlayingValue = useAtomValue(songPlaying);

    const lyricParser = dataLyricFile && lrcParser(dataLyricFile.toString('utf8'));
    const [step, setStep] = React.useState<TypeActiveStep>('lyricSong');
    const steps: Record<string, React.ReactNode> = {
        listPlay: <ListPlay />,
        karaoke: <Karaoke />,
        lyricSong: <LyricSong lyric={lyricParser?.scripts as unknown as ILyricFormat[]} />,
    };
    const avgAnalyserValue = useAtomValue(avgAnalyser);
    return (
        <Container tw="absolute inset-0 z-10">
            <Container
                tw="w-full h-full bg-[#00000080] flex-col"
                style={{
                    backgroundColor:
                        'rgb(' +
                        avgAnalyserValue +
                        ',' +
                        avgAnalyserValue +
                        ',' +
                        avgAnalyserValue +
                        ',0.6)',
                }}
            >
                <Container tw="p-4 items-center justify-center ">
                    <Container tw="bg-whiteAlpha-10 rounded-full">
                        <Span active={step === 'listPlay'} onClick={() => setStep('listPlay')}>
                            Danh sách phát
                        </Span>
                        <Span active={step === 'karaoke'} onClick={() => setStep('karaoke')}>
                            Karaoke
                        </Span>
                        <Span active={step === 'lyricSong'} onClick={() => setStep('lyricSong')}>
                            Lời bài hát
                        </Span>
                    </Container>
                    <Container tw="absolute right-0 top-0 p-4 px-8 z-10 gap-4">
                        <ButtonIcon
                            content="Toàn màn hình"
                            icon="ic-scale-1"
                            tw="hidden lg:flex text-icon-setting"
                            size="large"
                            fontSize={20}
                        />
                        <ButtonIcon
                            content="Cài đặt"
                            icon="ic-settings"
                            tw="hidden lg:flex text-icon-setting"
                            size="large"
                            fontSize={20}
                        />
                        <ButtonIcon
                            content="Đóng"
                            icon="ic-go-down"
                            tw="hidden lg:flex text-icon-setting"
                            size="large"
                            fontSize={20}
                            onClick={() => setOpenLyric(false)}
                        />
                    </Container>
                </Container>
                <Container tw="w-full h-full px-10">{steps[step]}</Container>
            </Container>
            <Container
                tw="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1] blur-xl scale-125"
                style={{
                    backgroundImage: 'url("' + songPlayingValue?.thumbnail + '")',
                }}
            />
        </Container>
    );
};
