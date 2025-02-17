import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['**/*.jpg'],
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});