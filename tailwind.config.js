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
          DEFAULT: '#DC0000', // Ferrari Red
          light: '#FF1A1A',
          dark: '#B30000',
        },
        accent: {
          DEFAULT: '#FFD700', // Ferrari Yellow
          light: '#FFE44D',
          dark: '#FFC000',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          accent: '#FFD700',
        },
        background: {
          primary: '#0A0A0A',
          secondary: '#1A1A1A',
          accent: '#DC0000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
