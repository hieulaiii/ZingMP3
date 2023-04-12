import useSWR from 'swr';

import { appContainer } from '@/lib/core/container';

const { searchService } = appContainer.cradle;

const searchKeywordFetcher = searchService.getSearchKeyword.bind(searchService);
export const useSearchKeyword = () => {
    const { data, error } = useSWR(`/search-keyword`, searchKeywordFetcher);
    return {
        searchKeyword: data,
        isLoading: !error && !data,
        isError: error,
    };
};
const searchSuggestionsFetcher = searchService.getSearchSuggestions.bind(searchService);
export const useSearchSuggestions = (query: string) => {
    const { data, error } = useSWR(query, searchSuggestionsFetcher);
    return {
        searchSuggestions: data,
        isLoading: !error && !data,
        isError: error,
    };
};
