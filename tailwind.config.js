/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#faf6f0',
          'bg-warm': '#f5efeb',
          'bg-card': '#ffffff',
          'bg-dark': '#1c1917',
          dark: '#1c1917',
          charcoal: '#292524',
          muted: '#78716c',
          subtle: '#a8a29e',
          border: '#e7e0d8',
          'border-dark': '#38332f',
          terracotta: '#d9654c',
          'terracotta-dark': '#b94e37',
          sage: '#81987e',
          ochre: '#c99a4c',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        }
      }
    },
  },
  plugins: [],
}
