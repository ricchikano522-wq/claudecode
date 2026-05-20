/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Wine Red ── */
        wine:        '#8B2D3E',
        'wine-deep': '#1C0910',
        'wine-mid':  '#5A1A28',
        'wine-light':'#B84D62',
        /* ── Forest Green ── */
        forest:        '#2A6B50',
        'forest-deep': '#091A12',
        'forest-mid':  '#1A4A35',
        'forest-light':'#3A8A68',
        /* ── Neutral ── */
        parchment:     '#F6F2EE',
        'parchment-mid':'#EBE5DF',
        ink:           '#1A1618',
        muted:         '#6B5C60',
        'muted-light': '#998E91',
        'light-text':  '#EEE8E5',
        'light-text-muted': 'rgba(238,232,229,0.5)',
        border:        '#D5CAC6',
        'border-dark': '#2A2025',
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"Noto Serif JP"', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)',  '"Noto Sans JP"',  'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':  'fadeIn 1.2s ease-out forwards',
        float:      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
