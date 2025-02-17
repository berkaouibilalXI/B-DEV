import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['**/*.jpg'],
  plugins: [react()],
  base: '/B-DEV/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});