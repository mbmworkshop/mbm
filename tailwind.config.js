const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.vue',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '768px',
      lg: '1024px',  
      xl: '1280px',
    },
    extend: {
      colors: {
        'mbm-green': {
          'dark': '#164b39',
          'default': '#247a5d',
          'light': '#91c4b3'
        },
        'mbm-red': {
            'dark': '4f2117',
            'default': '#7a3224',
            'light': '#ca634e'
        }
      }
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': {
          backgroundColor: theme('colors.gray.200'),
          textColor: theme('colors.gray.800'),
          fontWeight: theme('fontWeight.light'),
        },
      })
    }),
    plugin(function({ addComponents, theme }) {
      const styles = {
        '.section-header': {
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.xl'),
        },
        '.body-text': {
          '& p': {
            'margin-top': theme('spacing.2')
          },
          '& a': {
            color: theme('colors.mbm-green.default'),
            '&:hover': {
              color: theme('colors.mbm-green.light')
            }
          }
        }
      }
      const mediaQuery = [
        {
          [`@media (min-width: ${theme('screens.sm')})`]: {
            '.section-header': {
              fontSize: theme('fontSize.2xl')
            }
          },
        }
      ]

      addComponents([styles, ...mediaQuery])
    })
  ]
}