// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vinnyhorgan.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Reached from dvh's devices over Tailscale as http://iris:4321.
  server: { host: true, port: 4321, allowedHosts: ['iris'] },
  vite: {
    plugins: [tailwindcss()],
  },
});
