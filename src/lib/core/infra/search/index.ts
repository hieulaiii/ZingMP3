// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

import { HTTPService } from '../http';

interface Dependencies {
    readonly httpService: HTTPService;
}

export class SearchService {
    private readonly httpService: HTTPService;
    constructor({ httpService }: Dependencies) {
        this.httpService = httpService;
    }

    public async getSearchKeyword(): Promise<i.ISearchKeyword[]> {
        const res = await this.httpService.get({
            url: 'search-keyword',
        });
        return res.data;
    }
    public async getSearchSuggestions(query: string): Promise<i.ISearchSuggestions> {
        console.log('query', query);
        const res = await this.httpService.get({
            url: `search-suggestions?q=${query}`,
        });
        return res.data;
    }
}
