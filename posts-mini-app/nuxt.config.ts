// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
  ],
  // use SSR by default
  // but when building SPA w/o SSR,
  // env param `NUXT_USE_SSR=0` should be passed
  ssr: process.env.NUXT_USE_SSR !== '0',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // About pre-rendered at build time
    '/about': { prerender: true },
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
  fontawesome: {
    icons: {
      solid: [
        'heart',
        'thumbs-down',
      ],
      regular: [
        'heart',
        'thumbs-down',
      ],
    },
  },
})
