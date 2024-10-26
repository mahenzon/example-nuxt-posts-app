import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        red: {
          420: '#FF3B30',
        },
        orange: {
          420: '#FF6B00',
        },
      },
    },
  },
}
