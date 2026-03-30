/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cocoa: '#3E2723',         // main cocoa brown (luxury chocolate tone)
        cocoaDark: '#2A1815',     // darker espresso brown for headers or footers
        cocoaLight: '#6B4E44',    // accent tone for hover / borders
        gold: '#C8A97E',          // warm soft gold (pairs beautifully with brown)
        cream: '#F8F5F1',         // elegant off-white for text
      },
      fontFamily: {
        body: ['Lora', 'serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        header: '64px',
      },
    },
  },
  plugins: [],
}
