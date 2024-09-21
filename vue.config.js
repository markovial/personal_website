const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')
const svgLoader = require('vite-svg-loader')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/personal_website/'
    : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .options({
          mode: ['body'],
          markdownIt: {
            html: true,
            linkify: true,
            typographer: true,
          }
        })

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vite-svg-loader')
      .loader('vite-svg-loader')

    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]
  }
})
