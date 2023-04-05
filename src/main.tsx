import React from 'react';

import { Provider } from 'jotai';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { GlobalStyles, I18Provider, StateProvider } from './lib/Provider';

import './styles/global.css';
import './styles/icon.css';

const root = createRoot(document.getElementById('root')! as HTMLElement);
root.render(
    <StateProvider>
        <Provider>
            <GlobalStyles />
            <I18Provider>
                <App />
            </I18Provider>
        </Provider>
    </StateProvider>
);
