/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        univ: {
          lime: 'var(--univ-lime)',
          green: 'var(--univ-green)',
          orange: 'var(--univ-orange)',
          coral: 'var(--univ-coral)',
          yellow: 'var(--univ-yellow)',
          blue: 'var(--univ-blue)',
          'blue-light': 'var(--univ-blue-light)',
          'page-blue': 'var(--univ-page-blue)',
          'page-blue-hover': 'var(--univ-page-blue-hover)',
          link: 'var(--univ-link)',
          black: '#000000',
          'gray-950': '#050505',
          'gray-900': '#0A0A0A',
          'gray-850': '#121212',
          'gray-800': '#1A1A1A',
          'gray-700': '#2A2A2A',
          'gray-500': '#6B6B6B',
          'gray-300': '#B8B8B8',
        },
          skoleom: {
          lime: '#a8ff35',
          orange: '#ff6b35',
          yellow: '#ffd600',
          blue: '#0033ff',
          'blue-light': '#6fa8ff',
          gray: {
            950: '#0a0a0a',
            900: '#111111',
            800: '#1b1b1b',
          },
        },
      },
      fontFamily: {
        display: ['"Anton"', 'system-ui', 'sans-serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'capsule-pop': 'capsulePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        shimmer: 'shimmer 2s linear infinite',
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(168, 255, 53, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(168, 255, 53, 0)' },
        },
        capsulePop: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '60%': { opacity: 1, transform: 'scale(1.1)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'univ-gradient':
          'linear-gradient(135deg, var(--univ-lime) 0%, var(--univ-yellow) 50%, var(--univ-orange) 100%)',
        'univ-radial': 'radial-gradient(circle at top right, var(--univ-lime) 0%, transparent 50%)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
