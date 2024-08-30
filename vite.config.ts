/// <reference types="vite/client" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import pkg from './package.json'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react({ jsxRuntime: 'classic'}), tsconfigPaths()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.tsx'),
            name: 'ra-auth-ui',
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
        },
    },
})
