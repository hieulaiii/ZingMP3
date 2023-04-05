import React from 'react';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import {
    audioPlaying,
    audioSrc,
    currentTime,
    duration,
    loopSong,
    LoopSongEnum,
    volume,
} from '@/lib/states';

export const Audio: React.FC = () => {
    const audio = React.useRef<HTMLAudioElement>(null);

    const [audioPlayingValue, setAudioPlaying] = useAtom(audioPlaying);
    const audioSrcValue = useAtomValue(audioSrc);
    const setDuration = useSetAtom(duration);
    const setCurrentTime = useSetAtom(currentTime);
    const loopSongValue = useAtomValue(loopSong);
    const volumeValue = useAtomValue(volume);

    React.useEffect(() => {
        if (audio.current && audioSrcValue) {
            setAudioPlaying(true);
        }
    }, [audioSrcValue]);

    React.useEffect(() => {
        console.log('audioPlayingValue', audioPlayingValue);
        if (audio.current && audioSrcValue) {
            if (audioPlayingValue) {
                audio.current.play();
            } else {
                audio.current.pause();
            }
        }
    }, [audioPlayingValue, audioSrcValue]);

    React.useEffect(() => {
        console.log(volumeValue);
        if (audio.current && audioSrcValue) {
            audio.current.volume = volumeValue;
        }
    }, [volumeValue]);

    const handleEnded = () => {
        setAudioPlaying(false);
        loopSongValue === LoopSongEnum.ONESONG && setAudioPlaying(true);
    };
    return (
        <audio
            ref={audio}
            src={audioSrcValue}
            onLoadedData={() => audio.current && setDuration(Math.round(audio.current.duration))}
            onTimeUpdate={() => setCurrentTime(Math.round(audio.current?.currentTime || 0))}
            onEnded={handleEnded}
        />
    );
};
