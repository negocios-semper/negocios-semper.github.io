import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github"; // Importa la integración de GitHub

// https://astro.build/config
export default defineConfig({
  site: 'https://www.semper.pe',
  base: '/', 
  output: 'static',
  integrations: [tailwind(), github()] , // Incluye la integración de GitHub aquí
});
