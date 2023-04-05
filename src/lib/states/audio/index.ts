/* eslint-disable no-unused-vars */
import { atom } from 'jotai';

export const audioSrc = atom<string | undefined>(undefined);

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

export const volume = atom<number>(1);
