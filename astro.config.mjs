import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://www.semper.pe',
  base: '/', 
  output: 'static', // Esto asegura que se genere como un sitio estático
  integrations: [tailwind()]
});
