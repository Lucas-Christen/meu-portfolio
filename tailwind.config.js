/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Ferrari Yellow
          light: '#FFE44D',
          dark: '#FFC000',
        },
        accent: {
          DEFAULT: '#DC0000', // Ferrari Red
          light: '#FF1A1A',
          dark: '#B30000',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          accent: '#FFD700', 
        },
        background: {
          primary: '#1c1c1c',
          secondary: '#262626',
          accent: '#DC0000',
        },
      },
      fontFamily: {
        // Fonte trocada para 'Sora' para um visual mais premium e moderno
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        // Novas animações adicionadas
        'aurora': 'aurora 60s linear infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
        'slide-in': 'slideIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        // Keyframes para as novas animações
        aurora: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '200% 50%' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        slideIn: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
