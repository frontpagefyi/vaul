import { defineConfig } from 'eslint/config';
import css from '@eslint/css';

export default defineConfig({
  name: 'vaul-eslint/css',
  files: ['**/*.css'],
  plugins: { css },
  extends: ['css/recommended'],
});
