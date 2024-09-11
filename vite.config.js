import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    vue(),
  ],
  server: {
    proxy: {

      '/api': {
        target: 'https://inv-superlink.online',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') 
      },
    },
  },
});
