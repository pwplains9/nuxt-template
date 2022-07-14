const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },

  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],

  styleResources: {
    scss: [
      '~assets/styles/breakpoint.scss',
      '~assets/styles/fonts.scss',
      '~assets/styles/global.scss',
      '~assets/styles/helpers.scss'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    "@nuxtjs/style-resources",
    'nuxt-svg-loader',
    // '@nuxtjs/strapi'
  ],

  /*
  ** Strapi modules
  */

  strapi: {
    entities: ['restaurants', 'categories'],
    url: 'http://localhost:1337'
  },

  /*
  ** Loaders
  */

  rules: [
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    }
  ],

  /*
  ** buildModules
  */

  buildModules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/strapi',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    ['@nuxtjs/stylelint-module', {
      configFile: './.stylelintrc.json'
    }]
  ],

  // @nuxtjs/svg-sprite config
  // svgSprite: {
  //   input: '~/assets/svg/'
  // },
  // svgSprite: {
  //   dir: '~/assets/svg-sprites/svg',
  //   test: /\.(svg)(\?.*)?$/,
  //   loaderOptions: {
  //     extract: true,
  //     spriteFilename: 'img/icons.[hash:8].svg'
  //   },
  //   pluginOptions: {
  //     plainSprite: true
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
