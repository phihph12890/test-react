module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js',
    './src/**/**/*.js',
  ],
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
