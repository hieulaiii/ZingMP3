import React from 'react';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { BASE_URL, BASE_URL_OLD } from '@/lib/config';
import {
    audioPlaying,
    audioSrc,
    avgAnalyser,
    currentTime,
    duration,
    loopSong,
    LoopSongEnum,
    volume,
} from '@/lib/states';

export const Audio: React.FC = () => {
    let analyser: any = null;
    const [audioSource, setAudioSource] = React.useState<MediaElementAudioSourceNode | null>(null);
    const audio = React.useRef<HTMLAudioElement>(null);
    const [audioPlayingValue, setAudioPlaying] = useAtom(audioPlaying);
    const audioSrcValue = useAtomValue(audioSrc);
    const setDuration = useSetAtom(duration);
    const setCurrentTime = useSetAtom(currentTime);
    const loopSongValue = useAtomValue(loopSong);
    const volumeValue = useAtomValue(volume);
    const setAvgAnalyser = useSetAtom(avgAnalyser);

    React.useEffect(() => {
        if (audio.current && audioSrcValue) {
            if (audioPlayingValue) {
                audio.current.play();
            } else {
                audio.current.pause();
            }
        }
    }, [audioPlayingValue, audioSrcValue]);

    React.useEffect(() => {
        if (audio.current && audioSrcValue) {
            audio.current.volume = volumeValue;
        }
    }, [volumeValue]);

    const handleEnded = () => {
        setAudioPlaying(false);
        loopSongValue === LoopSongEnum.ONESONG && setAudioPlaying(true);
    };
    const loop = () => {
        if (analyser) {
            window.requestAnimationFrame(loop);
            const fbc = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(fbc);
            const avg = fbc.reduce((a, b) => a + b, 0) / fbc.length;
            setAvgAnalyser(avg);
        }
    };
    React.useEffect(() => {
        if (audioPlayingValue && audio.current) {
            analyser = null;
            if (!audioSource) {
                const context = new AudioContext();
                analyser = context.createAnalyser();
                const audioSourceNew = context.createMediaElementSource(audio.current);
                setAudioSource(audioSourceNew);
                audioSourceNew.connect(analyser);
                analyser.connect(context.destination);
                loop();
            }
        } else {
            setAvgAnalyser(0);
        }
    }, [audioPlayingValue]);
    return (
        <audio
            ref={audio}
            crossOrigin="anonymous"
            src={audioSrcValue?.replace(BASE_URL_OLD, BASE_URL)}
            onLoadedData={() => audio.current && setDuration(Math.round(audio.current.duration))}
            onTimeUpdate={() => setCurrentTime(Math.round(audio.current?.currentTime || 0))}
            onEnded={handleEnded}
        />
    );
};
