import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['**/*.jpg'],
  plugins: [react()],
  base: '/portfolio',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});