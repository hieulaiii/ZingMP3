import { ISong } from './items';

export type ICountry = 'vn' | 'us' | 'korea';

export interface IGroupChart {
    id: number;
    name: string;
    type: string;
    link: string;
}

export interface IRealTimeItemChart {
    time: number;
    hour: string;
    counter: number;
}

export interface IWeekChart {
    banner: string;
    playlistId: string;
    chartId: number;
    cover: string;
    country: string;
    type: string;
    group: IGroupChart[];
    link: string;
    week: number;
    year: number;
    latestWeek: number;
    startDate: string;
    endDate: string;
    items: ISong[];
    sectionId: string;
}

export interface IChart {
    RTChart: {
        promotes: ISong[];
        items: ISong[];
        chart: {
            minScore: number;
            maxScore: number;
            items: Record<string, IRealTimeItemChart[]>;
            totalScore: number;
            times: { hour: string }[];
        };
        chartType: string;
        sectionType: string;
        sectionId: string;
    };
    newRelease: ISong[];
    weekChart: Record<ICountry, IWeekChart>;
}
