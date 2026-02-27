/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Refined dark theme palette
        dark: {
          950: '#050508',
          900: '#0a0b10',
          800: '#12141d',
          700: '#1a1d2a',
          600: '#252938',
        },
        // Refined accent colors
        accent: {
          cyan: '#00d4ff',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          glow: 'rgba(0, 212, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #00d4ff 0%, #3b82f6 50%, #8b5cf6 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.25)' },
        },
      },
    },
  },
  plugins: [],
}
