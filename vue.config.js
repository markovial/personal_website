const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
const path = require('path')

module.exports = {
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
  }
}