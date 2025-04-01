// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
function yearPlugin() {
  return {
    name: "year",
    transformIndexHtml(html: string): string {
      return html.replace("__YEAR__", new Date().getFullYear().toString());
    },
  } as const;
}
export default defineConfig({
  plugins: [react()],
  yearPlugin(),
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
