// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

export interface ISearchKeyword {
    keyword: string;
    link: string;
}

export interface IKeyWord {
    type: number;
    keyword: string;
    suggestType: number;
}

export interface ISearchSuggestions {
    tracking: string;
    items: [
        {
            keywords: IKeyWord[];
        },
        {
            suggestions: i.ISuggestions[];
        }
    ];
}
