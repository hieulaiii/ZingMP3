import React from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';
import { GlobalStyles, I18Provider, StateProvider } from './lib/Provider';
import './styles/global.css';
import './styles/icon.css';

const root = createRoot(document.getElementById('root')! as HTMLElement);
root.render(
    <StateProvider>
        <GlobalStyles />
        <I18Provider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </I18Provider>
    </StateProvider>
);
