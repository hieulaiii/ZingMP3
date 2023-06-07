import React from 'react';

import { useSetAtom } from 'jotai';
import useSWR from 'swr';

import { appContainer } from '@/lib/core/container';
import { getFileLyric } from '@/lib/core/infra/common';
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
    const { streamingData: stream } = useStreaming(idSong);
    const { infoSong: song } = useInfoSong(idSong);
    React.useEffect(() => {
        if (stream && song) {
            setAudioSrc(stream[128]);
            setSongPlaying(song);
            setAudioPlaying(true);
        }
    }, [stream, song]);
    const handlePlaySong = (id: string) => {
        setIdSong(id);
    };

    return {
        handlePlaySong,
    };
};
const lyricSongFetcher = songService.getLyric.bind(songService);
export const useLyric = (id: string) => {
    const { data, error } = useSWR(
        id ? [id, `song-lyric${id}`] : null,
        ([id]) => lyricSongFetcher(id),
        {
            revalidateIfStale: false,
        }
    );
    const link = data?.file;
    const { data: dataLyricSong } = useSWR(link, getFileLyric, {
        revalidateIfStale: false,
    });

    return {
        lyricSong: data,
        dataLyricFile: dataLyricSong,
        isLoading: !error && !data,
        isError: error,
    };
};
