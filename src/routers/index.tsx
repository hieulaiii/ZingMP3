import { createBrowserRouter } from 'react-router-dom';

import { Discover } from '../Pages/Discover';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '',
                element: <Discover />,
            },
        ],
    },
]);

export default router;
