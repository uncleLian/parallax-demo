const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const projectName = require('./package.json').name
module.exports = {
    // 如果部署项目时不是根目录，请参照官网修改publicPath值
    // https://cli.vuejs.org/zh/config/#publicpath
    publicPath: '/parallax-demo/',
    outputDir: 'docs',
    lintOnSave: true,
    productionSourceMap: false,
    css: {
        sourceMap: false,
        loaderOptions: {
            stylus: {
                // 全局引入index.styl文件
                import: [path.resolve(__dirname, './src/assets/css') + '/index.styl']
            }
        }
    },
    devServer: {
        port: 8009,
        open: true
    },
    configureWebpack: {
        name: projectName,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}
