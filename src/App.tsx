import React from 'react';

import { RouterProvider } from 'react-router-dom';

import { Layout } from './Layout';
import router from './routers';

export const App: React.FC = () => (
    <Layout>
        <RouterProvider router={router} />
    </Layout>
);
