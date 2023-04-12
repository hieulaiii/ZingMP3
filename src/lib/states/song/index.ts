import { atomWithStorage } from 'jotai/utils';
// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

import { keyStorage } from '@/lib/LocalStorage/key-storage';

export const songPlaying = atomWithStorage<i.ISong | undefined>(keyStorage.songPlaying, undefined);
