// vite.config.ts
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
// eslint-disable-next-line import/default
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2020',
        },
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    resolve: {
        alias: [{ find: '@', replacement: path.join(__dirname, '/src') }],
    },
    plugins: [
        react({
            babel: {
                //presets: ['@babel/preset-react', '@babel/preset-typescript'],
                plugins: [
                    'babel-plugin-twin',
                    'babel-plugin-macros',
                    'babel-plugin-styled-components',
                    [
                        'auto-import',
                        {
                            declarations: [{ default: 'React', path: 'react' }],
                        },
                    ],
                ],
            },
        }),
        svgr(),
    ],
});
