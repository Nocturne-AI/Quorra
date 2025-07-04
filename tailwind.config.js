/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // QUORRA Divine Fire Theme
        'quorra-bronze': '#CD7F32',
        'quorra-bronze-dark': '#B8860B',
        'quorra-fire': '#FF8C42',
        'quorra-fire-light': '#FF9F5A',
        'quorra-gradient-start': '#CD7F32',
        'quorra-gradient-end': '#FF8C42',
        
        // Brand Colors
        'divine-fire': '#FF8C42',
        'sacred-bronze': '#CD7F32',
        'blessed-gold': '#FFD700',
        'ember-orange': '#F97316',
        'forge-dark': '#1A1A1A',
        'ash-gray': '#F5F5F5',
        
        // UI Colors  
        'silver-light': '#C8C8C8',
        'silver-medium': '#BABABA',
        'silver-dark': '#A8A8A8',
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #CD7F32, #FF8C42)',
        'sacred-gradient': 'linear-gradient(to right, #CD7F32, #FF8C42)',
        'ember-gradient': 'linear-gradient(45deg, #F97316, #FF8C42)',
      },
      fontFamily: {
        'divine': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sacred': ['Crimson Text', 'serif'],
      },
      animation: {
        'divine-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flame-flicker': 'flicker 1.5s ease-in-out infinite alternate',
        'sacred-glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF8C42' },
          '100%': { boxShadow: '0 0 20px #FF8C42, 0 0 30px #CD7F32' },
        }
      },
      boxShadow: {
        'divine': '0 4px 6px rgba(205, 127, 50, 0.1), 0 10px 20px rgba(205, 127, 50, 0.08)',
        'sacred': '0 8px 25px rgba(255, 140, 66, 0.15)',
        'ember': '0 4px 14px rgba(249, 115, 22, 0.25)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}