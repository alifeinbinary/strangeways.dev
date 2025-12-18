import js from '@eslint/js'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    globalIgnores(['dist', 'worker-configuration.d.ts']),
    {
        // App / browser code (React, Vite, etc.)
        files: ['**/*.{ts,tsx}'],
        ignores: ['functions/**'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            // ❌ REMOVE the problematic 'reactHooks.configs' from extends
            // reactRefresh.configs.vite, // Keep this one if it works without error
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            // Define all plugins explicitly
            'react-x': reactX,
            'react-dom': reactDom,
            'react-hooks': reactHooks, // Ensure react-hooks is defined here
            'react-refresh': reactRefresh, // Ensure react-refresh is defined here if needed
        },
        rules: {
            // 👇 Merge rules from the "recommended" config of all necessary plugins
            ...reactHooks.configs['recommended-latest'].rules, // Use the rules property
            ...reactX.configs.recommended.rules,
            ...reactDom.configs.recommended.rules,
            // Allow dangerouslySetInnerHTML usage by disabling DOM rules from eslint-react
            'dom/no-dangerously-set-innerhtml': 'off',
            'dom/no-dangerously-set-innerhtml-with-children': 'off',
            // If react-refresh.configs.vite provides rules, merge them like this too:
            // ...reactRefresh.configs.vite.rules, 
        },
        settings: {
            react: {
                version: 'detect',
            }
        }
    },
    {
        // Cloudflare Pages / Workers functions
        files: ['functions/**/*.ts'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.worker,
            parserOptions: {
                project: ['./tsconfig.functions.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
])
