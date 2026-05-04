import defaultTheme from 'tailwindcss/defaultTheme.js'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // o9 brand palette (the company), shared across Arvo products
        o9: {
          black: '#000000',
          white: '#ffffff',
          shock: '#0037ff',      // Retail Planning
          indigo: '#7433cc',     // Supply Chain Planning & Analytics
          grass: '#00c278',      // Integrated Business Planning
          sun: '#ffe500',        // Supplier Relationship Management
          juice: '#ff7311',      // Demand Planning
          scarlet: '#ff1e39',    // Revenue Growth Management
        },
        // Semantic neutrals
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Dark theme surface
        surface: {
          DEFAULT: '#000000',
          raised: '#0a0a0a',
          overlay: '#171717',
        },
        // Light mode design tokens (use without dark: for light, dark: for dark)
        'arvo-light': {
          bg: '#FFFFFF',
          primary: '#010101',
          secondary: '#303030',
          surface: '#F2F2F2',
          border: '#E5E5E5',
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'highlight-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'hero-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'ai-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        },
        'word-enter': {
          '0%': { opacity: '0', transform: 'translateY(0.35em)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'highlight-pulse': 'highlight-pulse 2s ease-in-out infinite',
        'hero-float': 'hero-float 5s ease-in-out infinite',
        aurora: 'aurora 14s ease-in-out infinite',
        'ai-shimmer': 'ai-shimmer 3.5s linear infinite',
        'pulse-ring': 'pulse-ring 4s ease-in-out infinite',
        'word-enter': 'word-enter 0.5s ease-out both',
        'hero-bob': 'hero-bob 5s ease-in-out infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
    // Replace default sans/mono entirely (no merge with old stacks). See public/o9SansFont/o9Sans.css
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"o9Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
    },
  },
  plugins: [],
  // Arvo: 0 radius policy — no border radius
  corePlugins: {
    borderRadius: false,
  },
}
