module.exports = {
  build: {},
  css: [
    'normalize.css',
  ],
  dev: {},
  env: {
    baseUrl: 'http://localhost:8888/wp-json/wp/v2',
  },
  generate: {},
  head: {
    meta: [
      { charset: 'utf-8', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
  },
  loading: { color: '#3B8070' },
  loadingIndicator: {},
  manifest: {
    theme_color: '#3B8070',
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  plugins: [],
};
