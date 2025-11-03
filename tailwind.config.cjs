module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta ajustada para tema gastronômico (vermelho, amarelo, branco)
        // primary: vermelho profundo para contrastar bem em botões e títulos
        primary: '#8b1d1d',
        // gold: amarelo quente usado como destaque/badge
        gold: '#f59e0b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 0 2px #f59e0b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
