import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'worker',
      fileName: 'worker',
      formats: ['es'],
    },
    minify: false,
  },
})
