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

    public async getStreaming(id: String): Promise<i.IStreaming> {
        const res = await this.httpService.get({
            url: `streaming?id=${id}`,
        });
        return res.data;
    }
}
