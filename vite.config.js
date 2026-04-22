import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  server: {
    port: 3000
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      },
    }),
  ]
});