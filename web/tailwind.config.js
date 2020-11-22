module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cooper Hewitt', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        domine: ['Domine', 'serif'],
        cardo: ['Cardo', 'serif'],
        ch: ['Cooper Hewitt', 'sans-serif']
      }, 
     },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")
  ],
}
