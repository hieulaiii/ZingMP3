// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

import { HTTPService } from '../http';

interface Dependencies {
    readonly httpService: HTTPService;
}

export class ChartService {
    private readonly httpService: HTTPService;
    constructor({ httpService }: Dependencies) {
        this.httpService = httpService;
    }

    public async getChart(): Promise<i.IChart> {
        const res = await this.httpService.get({
            url: 'chart-home',
        });
        return res.data;
    }
}
