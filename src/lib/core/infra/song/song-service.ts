// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

import { HTTPService } from '../http';

interface Dependencies {
    readonly httpService: HTTPService;
}

export class SongService {
    private readonly httpService: HTTPService;
    constructor({ httpService }: Dependencies) {
        this.httpService = httpService;
    }

    public async getStreaming(id: string): Promise<i.IStreaming> {
        const res = await this.httpService.get({
            url: `streaming?id=${id}`,
        });
        return res.data;
    }
    public async getInfoSong(id: string): Promise<i.ISong> {
        const res = await this.httpService.get({
            url: `song-info?id=${id}`,
        });
        return res.data;
    }
    public async getLyric(id: string): Promise<i.ILyric> {
        const res = await this.httpService.get({
            url: `song-lyric?id=${id}`,
        });
        return res.data;
    }
}
