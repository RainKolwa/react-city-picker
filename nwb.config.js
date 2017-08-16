module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactLoadingButton',
      externals: {
        react: 'React'
      }
    }
  }
}
