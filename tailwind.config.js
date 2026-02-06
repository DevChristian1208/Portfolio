// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // Wenn du das App-Router-Verzeichnis nutzt
    "./pages/**/*.{js,ts,jsx,tsx}",       // Falls du pages-Router verwendest
    "./components/**/*.{js,ts,jsx,tsx}",  // Für eigene Komponenten
  ],
  theme: {
    extend: {
      fontFamily: {
        press: ['"Press Start 2P"', 'cursive'], // Deine Schriftart eintragen
      },
    },
  },
  plugins: [],
};
