import { useAtom, useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { convertNumberToTime } from '@/common';
import { Text } from '@/components/common/Element';
import { ButtonIcon, TimeSlider } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';
import {
    audioPlaying,
    currentTime,
    duration,
    loopSong,
    LoopSongEnum,
    LoopSongType,
    shuffleSong,
} from '@/lib/states';

import { NextSong } from './components';

interface DashboardSongProps {}
export const DashboardSong: React.FC<DashboardSongProps> = () => {
    const { t } = useTranslation('layout');
    const [audioPlayingValue, setAudioPlaying] = useAtom(audioPlaying);
    const durationValue = useAtomValue(duration);
    const currentTimeValue = useAtomValue(currentTime);
    const [shuffleSongValue, setShuffleSong] = useAtom(shuffleSong);
    const [loopSongValue, setLoopSong] = useAtom(loopSong);

    const handleLoopSong = () => {
        if (loopSongValue === LoopSongEnum.NOLOOP) {
            setLoopSong(LoopSongEnum.ALLSONG);
        } else if (loopSongValue === LoopSongEnum.ALLSONG) {
            setLoopSong(LoopSongEnum.ONESONG);
        } else {
            setLoopSong(LoopSongEnum.NOLOOP);
        }
    };

    const tipLoop: Record<LoopSongType, string> = {
        [LoopSongEnum.NOLOOP]: t('turn_on_playback'),
        [LoopSongEnum.ALLSONG]: t('playback_one_song'),
        [LoopSongEnum.ONESONG]: t('turn_off_playback'),
    };
    return (
        <Container tw="flex-col w-full justify-center">
            <Container tw="items-center justify-center gap-x-[20px] h-[50px]">
                <ButtonIcon
                    css={shuffleSongValue ? tw`text-purple-primary` : tw``}
                    content={shuffleSongValue ? t('turn_off_shuffle') : t('turn_on_shuffle')}
                    icon="ic-shuffle"
                    hover
                    onClick={() => setShuffleSong(!shuffleSongValue)}
                />
                <ButtonIcon content="" icon="ic-pre" hover />
                <Container
                    tw="cursor-pointer items-center hover:text-purple-primary"
                    onClick={() => setAudioPlaying(!audioPlayingValue)}
                >
                    {audioPlayingValue ? (
                        <i
                            className="icon ic-pause-circle-outline"
                            tw="text-[40px] flex items-center"
                        />
                    ) : (
                        <i className="ic-play-circle-outline" tw="text-[40px] flex items-center" />
                    )}
                </Container>
                <ButtonIcon content={<NextSong />} icon="ic-next" hover />
                <ButtonIcon
                    css={loopSongValue !== LoopSongEnum.NOLOOP ? tw`text-purple-primary` : tw``}
                    content={tipLoop[loopSongValue]}
                    icon={loopSongValue !== LoopSongEnum.ONESONG ? 'ic-repeat' : 'ic-repeat-one'}
                    hover
                    onClick={handleLoopSong}
                />
            </Container>
            <Container tw="gap-[10px]">
                <Text tw="text-xs font-semibold text-layout-progressBar-player">
                    {convertNumberToTime(currentTimeValue)}
                </Text>
                <TimeSlider valueSlide={(currentTimeValue / durationValue) * 100} />
                <Text tw="text-xs font-semibold">{convertNumberToTime(durationValue)}</Text>
            </Container>
        </Container>
    );
};
