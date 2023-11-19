import { ISong } from './items';

export interface ISongsRecommend {
    items: ISong[];
    total: number;
}
