import useSWR from 'swr';

import { appContainer } from '@/lib/core/container';

const { chartService } = appContainer.cradle;

const chartFetcher = chartService.getChart.bind(chartService);
export const useChart = () => {
    const { data, error } = useSWR(`/chart-home`, async () => chartFetcher());
    return {
        chart: data,
        isLoading: !error && !data,
        isError: error,
    };
};
