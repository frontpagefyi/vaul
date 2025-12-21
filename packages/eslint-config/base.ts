import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import turbo from 'eslint-config-turbo/flat';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  turbo,
  importPlugin.flatConfigs.recommended,
  prettier,
  {
    name: 'vaul-eslint/base',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  globalIgnores(
    ['.vercel/', '.turbo/', 'node_modules/'],
    'vaul-eslint/base/ignores',
  ),
);
