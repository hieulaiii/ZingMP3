import React from 'react';

import { RouterProvider } from 'react-router-dom';

import router from './routers';

export const App: React.FC = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
