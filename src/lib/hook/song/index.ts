import React from 'react';
import { useSetAtom } from 'jotai';
import useSWR from 'swr';

import { appContainer } from '@/lib/core/container';
import { audioPlaying, audioSrc, songPlaying } from '@/lib/states';

const { songService } = appContainer.cradle;

const streamingFetcher = songService.getStreaming.bind(songService);
export const useStreaming = (id: string) => {
    const { data, error } = useSWR(
        id ? [id, `streaming-${id}`] : null,
        ([id]) => streamingFetcher(id),
        {
            revalidateIfStale: false,
        }
    );
    return {
        streamingData: data,
        isLoading: !error && !data,
        isError: error,
    };
};

const infoSongFetcher = songService.getInfoSong.bind(songService);
export const useInfoSong = (id: string) => {
    const { data, error } = useSWR(
        id ? [id, `info-song${id}`] : null,
        ([id]) => infoSongFetcher(id),
        {
            revalidateIfStale: false,
        }
    );
    return {
        infoSong: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export const usePlaySong = () => {
    const [idSong, setIdSong] = React.useState('');
    const setSongPlaying = useSetAtom(songPlaying);
    const setAudioPlaying = useSetAtom(audioPlaying);
    const setAudioSrc = useSetAtom(audioSrc);
    const { streamingData } = useStreaming(idSong);
    const { infoSong } = useInfoSong(idSong);

    React.useEffect(() => {
        console.log(infoSong?.encodeId);
        if (streamingData && infoSong) {
            setAudioSrc(streamingData[128]);
            setSongPlaying(infoSong);
            setAudioPlaying(true);
        }
    }, [streamingData?.[128], infoSong?.encodeId]);
    const handlePlaySong = (id: string) => {
        setIdSong(id);
    };

    return {
        handlePlaySong,
    };
};
