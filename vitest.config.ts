import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from './vite.config'

export default mergeConfig(
    baseConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: ['./setupTests.ts'],
            include: ['tests/**/*.{test,spec}.ts?(x)'],
        },
    })
)
