import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

export default withShurikenUI({
  content: [],
  important: true,
  theme: {
    
    extend: {
      // Custom colors
      colors: {
        primary: {
          50: '#ebf7ff',
          100: '#d1eeff',
          200: '#aee1ff',
          300: '#76d1ff',
          400: '#35b6ff',
          500: '#078fff',
          600: '#0068ff',
          700: '#004fff',
          800: '#0041d7',
          900: '#003eab',
          950: '#062665',
        },
        muted: colors.slate,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
      shurikenUi: {
        tooltip: {
          font: 'sans',
          bg: '[#1e293b]',
          bgDark: '[#003eab]',
          text: 'white',
          textDark: 'white',
          minWidth: '3rem',
          maxWidth: '21rem',
        },
      },
    },
  },
})
