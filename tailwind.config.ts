import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        raw: {
          black: '#0A0A0A',
          white: '#F2EFE9',
          concrete: '#C8C4BC',
          steel: '#6B6B6B',
          accent: '#D4521A',
          grid: '#1A1A1A',
        },
      },
      fontSize: {
        'brutal': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'massive': ['clamp(2.5rem, 7vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
}
export default config
