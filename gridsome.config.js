// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MBM Workshop',
  siteDescription: 'Participate in our workshop and become part of a new and exciting network of young researchers working in modelling with applications in biology and medicine.',
  siteUrl: 'https://mbm.systemsbiology.se',
  titleTemplate: 'MBM Workshop',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
}
