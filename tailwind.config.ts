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
        parchment: '#F8F5EF',
        'parchment-mid': '#EDE9DF',
        ink: '#1A1917',
        'ink-deep': '#0F0F0D',
        'ink-card': '#161614',
        muted: '#6B6560',
        'muted-light': '#A8A29E',
        accent: '#C4873A',
        'accent-light': '#DBA857',
        'accent-dim': 'rgba(196,135,58,0.15)',
        border: '#D5CEBF',
        'border-dark': '#2A2926',
        'light-text': '#F0EDE6',
        'light-text-muted': 'rgba(240,237,230,0.55)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'line-grow-x': 'lineGrowX 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'line-grow-y': 'lineGrowY 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrowX: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        lineGrowY: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      backgroundImage: {
        'dot-light': 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        'dot-dark': 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        'diagonal-lines': 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(196,135,58,0.06) 20px, rgba(196,135,58,0.06) 21px)',
      },
      backgroundSize: {
        'dot-32': '32px 32px',
        'dot-48': '48px 48px',
        'grid-64': '64px 64px',
      },
    },
  },
  plugins: [],
}
export default config
