import { VueQueryPluginOptions } from '@hebilicious/vue-query-nuxt';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vueQuery?: VueQueryPluginOptions;
  }
}
