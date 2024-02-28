/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./src/components/**/*.vue",
    "./src/**/**/*.vue",
    "./pages/**/*.vue",
    "./event/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./src/components/Navbar.vue",
    "./src/components/Header.vue",
    "./error.vue",

  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
      },
      colors: {
        beton: '#F5F5F5',
      }
    },
  },
  plugins: [],
}

