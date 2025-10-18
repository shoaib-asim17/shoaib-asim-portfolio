/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        'dark-bg': '#0a0a0a',
        'dark-bg-secondary': '#1A1A1A',
        'dark-bg-tertiary': '#2A2A2A',
        'neon-cyan': '#00FFFF',
        'neon-cyan-hover': '#00E6E6',
        'vanta-cyan': '#00bcd4',
        'neon-purple': '#7A00FF',
        'neon-purple-hover': '#8A1AFF',
        'neon-pink': '#FF00C8',
        'neon-pink-hover': '#FF1AD1',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-tertiary': '#666666',
        'text-muted': '#404040',
        'glass-bg': 'rgba(26, 26, 26, 0.8)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glow-primary': 'rgba(0, 255, 255, 0.3)',
        'glow-secondary': 'rgba(122, 0, 255, 0.3)',
        'glow-accent': 'rgba(255, 0, 200, 0.3)',
        'border-dark': 'rgba(255, 255, 255, 0.1)',
        'border-hover': 'rgba(0, 255, 255, 0.3)',
        'border-focus': 'rgba(0, 255, 255, 0.5)',
      },
      fontFamily: {
        'figtree': ['Figtree', 'system-ui', 'sans-serif'],
        'sans': ['Figtree', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00FFFF 0%, #7A00FF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7A00FF 0%, #FF00C8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF00C8 0%, #00FFFF 100%)',
        'gradient-bg': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(122, 0, 255, 0.3)',
        'glow-accent': '0 0 20px rgba(255, 0, 200, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
