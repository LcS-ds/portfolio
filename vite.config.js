import { defineConfig } from 'vite'

export default defineConfig({
  root: 'site',
  base: './',
  // Os oito PDFs selecionados no DS-02 também são os arquivos servidos pelo site.
  publicDir: '../docs/ds-02/certificados',
  html: {
    additionalAssetSources: {
      // Use the same versioned file for the preview image and its full-size link.
      a: {
        srcAttributes: ['href'],
        filter: ({ value }) => value.startsWith('./assets/'),
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
