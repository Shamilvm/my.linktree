import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'button-dark': '#1a1a1a',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
export default config

