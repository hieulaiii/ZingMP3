import * as awilix from 'awilix';

import { ChartService } from '../infra/chart/chart-service';
import { HTTPService } from '../infra/http';
import { SearchService } from '../infra/search';
import { SongService } from '../infra/song/song-service';

export interface Cradle {
    httpService: HTTPService;
    chartService: ChartService;
    songService: SongService;
    searchService: SearchService;
}

export const appContainer = awilix.createContainer<Cradle>();

appContainer.register({
    httpService: awilix.asClass(HTTPService).singleton(),
    chartService: awilix.asClass(ChartService).singleton(),
    songService: awilix.asClass(SongService).singleton(),
    searchService: awilix.asClass(SearchService).singleton(),
});
