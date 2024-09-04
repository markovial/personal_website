// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .options({
          mode: ['body']
        })
    
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    
    // Disable HMR plugin in production
    config.when(process.env.NODE_ENV === 'production', config => {
      config.plugins.delete('hmr')
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]
  }
})