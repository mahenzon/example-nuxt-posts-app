// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
  ],
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
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
