import { defineConfig, globalIgnores } from 'eslint/config';
import base from '@repo/eslint-config/base';
import react from '@repo/eslint-config/react';
import css from '@repo/eslint-config/css';

export default defineConfig(
  base,
  react,
  css,
  globalIgnores(
    [
      'dist',
      // Only want to lint the src/style.css file
      './style.css',
    ],
    'vaul/ignores',
  ),
);
