import * as path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-09',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
    },
  },
  alias: {
    src: path.join(__dirname, './src'),
  },
  srcDir: 'src/',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    dirs: [
      './assets',
      './hooks',
      './layouts',
      './plugins',
      './types',
    ],
    autoImport: true,
  },
})
