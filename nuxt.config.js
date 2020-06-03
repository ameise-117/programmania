const postcssOptions = {
  postcssCustomProperties: {
    preserve: true
  },
  postcssPresetEnv: {
    stage: 2,
    importFrom: 'assets/styles/_variable.css',
    features: {
      'custom-properties': true,
      'nesting-rules': true,
      'custom-media-queries': true
    },
    browsers: ['last 2 versions', 'IE >= 11', 'iOS >= 10', 'Android >= 5.0'],
    autoprefixer: {
      cascade: false,
      grid: true
    }
  },
  postcssCalc: {
    mediaQueries: true,
    selectors: true
  }
}

export default {
  /*
   ** server settings
   */
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /*
   ** route settings
   */
  router: {
    base: '/'
  },
  /*
   ** mode settings
   */
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'プログラミング的思考力育成道場',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'プログラミング,学習,練習問題' },
      {
        name: 'description',
        content: 'プログラミング的思考力を育てる学習サイト'
      },
      { hid: 'ogtitle', property: 'og:title', content: 'プログラミング的思考力育成道場' },
      {
        property: 'og:description',
        content: 'プログラミング的思考力を育てる学習サイト'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese' },
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#003174' },
  /*
   ** Global CSS
   */
  css: ['ress/ress.css', '~assets/styles/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/_nuxt/',
    extend(config, ctx) {},
    postcss: {
      plugins: {
        'postcss-import': postcssOptions.postcssImport,
        'postcss-custom-properties': postcssOptions.postcssCustomProperties,
        'postcss-preset-env': postcssOptions.postcssPresetEnv,
        'postcss-calc': postcssOptions.postcssCalc,
        'postcss-pseudoelements': true,
        'postcss-flexbugs-fixes': true,
        'postcss-flow-root': true,
        'postcss-grid-kiss': true,
        'postcss-will-change': true
      }
    },
    filenames: {
      app: () => '[name].js?v=[hash:7]',
      chunk: () => '[name].js?v=[hash:7]',
      css: () => '[name].js?v=[hash:7]',
      img: () => '[path][name].[ext]?v=[hash:7]',
      font: () => '[path][name].[ext]?v=[hash:7]',
      video: () => '[path][name].[ext]?v=[hash:7]'
    },
    splitChunks: {
      pages: false
    }
  },
  generate: {
    dir: 'dist/',
    subFolders: true,
    fallback: false
  }
}
