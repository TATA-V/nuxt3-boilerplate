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
  alias: {
    src: path.join(__dirname, './src'),
  },
  srcDir: 'src/',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss']
})
