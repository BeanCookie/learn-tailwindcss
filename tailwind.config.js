const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    colors: {
      yellow: {
          DEFAULT: '#FFB400',
      },
      purple: {
          DEFAULT: '#AE68D7',
      },
      lilac: {
          DEFAULT: '#F2D6FA',
      },
      amber: colors.amber,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
    },
    theme: {
      inset: {
        '1/3': '33%',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        default: {
          primary: '#AE68D7',
          accent: '#FF0000',
          yellow: '#FFB400',
          'base-100': "#ffffff",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
