import { atom } from 'jotai';
// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

export const songPlaying = atom<i.ISong | undefined>(undefined);
