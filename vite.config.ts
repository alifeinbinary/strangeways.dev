import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
        visualizer({
            filename: './dist/stats.html',
            open: true,
        }),
        tailwindcss(),
        cloudflare(),
    ],
    build: {
        sourcemap: true,
        rollupOptions: {
         treeshake: 'recommended'
        }
    },
    css: {
        devSourcemap: true,
    }
})
