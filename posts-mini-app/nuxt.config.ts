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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicon-256.png' },
      ],
    },
  },
  spaLoadingTemplate: true,
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
