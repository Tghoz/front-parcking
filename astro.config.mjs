import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import { middleware } from './src/middleware';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
});