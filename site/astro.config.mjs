import { defineConfig } from 'astro/config';

// Static build → dist/ uploads directly to Hostinger public_html.
export default defineConfig({
  site: 'https://lexfincapital.vn',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
});
