import { TestPage } from '@/Pages/Test';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../Layout';
import { DiscoverPage } from '../Pages/Discover';
import { ZingChartPage } from '../Pages/ZingChart';
import { NewMusicPage } from '@/Pages/NewMusic';

export type Page =
    | 'profile'
    | 'discover'
    | 'zingChart'
    | 'radio'
    | 'monitor'
    | 'newMusic'
    | 'category'
    | 'top100'
    | 'mv';

export const routerPaths: Record<Page, string> = {
    profile: '/profile',
    discover: '/',
    zingChart: '/zing-chart',
    radio: '/radio',
    monitor: '/monitor',
    newMusic: '/new-music',
    category: '/category',
    top100: '/top-100',
    mv: '/mv',
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: routerPaths.discover,
                element: <DiscoverPage />,
            },
            {
                path: routerPaths.zingChart,
                element: <ZingChartPage />,
            },
            {
                path: routerPaths.radio,
                element: <ZingChartPage />,
            },
            {
                path: routerPaths.newMusic,
                element: <NewMusicPage />,
            },
        ],
    },
    {
        path: '/test',
        element: <TestPage />,
    },
]);

export default router;
