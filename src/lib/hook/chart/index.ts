import useSWR from 'swr';

import { appContainer } from '@/lib/core/container';

const { chartService } = appContainer.cradle;

const chartFetcher = chartService.getChart.bind(chartService);
export const useChart = () => {
    const { data, error } = useSWR(`/chart-home`, chartFetcher);
    return {
        chart: data,
        isLoading: !error && !data,
        isError: error,
    };
};

const newReleaseFetcher = chartService.getNewReleaseChart.bind(chartService);

export const useNewRelease = () => {
    const { data, error } = useSWR(`/new-release`, newReleaseFetcher);
    return {
        newRelease: data,
        isLoading: !error && !data,
        isError: error,
    };
};
