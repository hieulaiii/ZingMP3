/* eslint-disable no-unused-vars */
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { keyStorage } from '@/lib/LocalStorage/key-storage';

export const audioSrc = atomWithStorage<string | undefined>(keyStorage.songSrc, undefined);

export const audioPlaying = atom<boolean>(false);

export const duration = atom<number>(0);

export const currentTime = atom<number>(0);

export const shuffleSong = atom<boolean>(false);

export type LoopSongType = 'oneSong' | 'AllSong' | 'noLoop';

export enum LoopSongEnum {
    ONESONG = 'oneSong',
    ALLSONG = 'AllSong',
    NOLOOP = 'noLoop',
}

export const loopSong = atom<LoopSongType>(LoopSongEnum.NOLOOP);

export const volume = atomWithStorage<number>(keyStorage.songVolume, 1);

export const avgAnalyser = atom<number>(0);
