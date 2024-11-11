import * as path from 'path';

const { BASE_URL } = process.env;
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
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: `${BASE_URL}/**`,
      },
    },
    compressPublicAssets: true,
    experimental: {
      nodeFetchCompat: true,
    },
    devProxy: {},
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
  imports: {
    dirs: [
      './api',
      './assets',
      './hooks',
      './layouts',
      './plugins',
      './types',
    ],
    autoImport: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@hebilicious/vue-query-nuxt'],
  vueQuery: {
    queryClientOptions: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
          staleTime: 1000 * 60 * 10, 
          gcTime: 1000 * 60 * 15, 
        },
      },
    },
  },
})
