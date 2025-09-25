import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', // ✅ bom para Vercel
  plugins: [react()],
  server: {
    port: 5173,
  },
  assetsInclude: ['**/*.webp'], // ✅ garante que .webp seja tratado como asset
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets-webp'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});

