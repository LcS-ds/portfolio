import { defineConfig } from 'vite'

export default defineConfig({
  root: 'site',
  base: './',
  // Os oito PDFs selecionados no DS-02 também são os arquivos servidos pelo site.
  publicDir: '../docs/ds-02/certificados',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
