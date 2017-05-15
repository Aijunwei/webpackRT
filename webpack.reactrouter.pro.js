var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var uglify = new UglifyJsPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/reactrouterEntry.js',
    output: {
      filename: 'js/bundle[chunkhash:8].js',
      //publicPath:'/assets/',
      chunkFilename: 'js/[name]-[chunkhash:8].bundle.js',
      path: path.resolve(__dirname, 'production')
  },
  module:{
      rules:[
          {
              test: /\.(js|jsx)$/,
              include: [
                  path.resolve(__dirname, "app")
              ],
              loader: 'babel-loader',
              options:{
                  presets:['es2015','react','stage-0']
              }
          },{
              test:/\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader",
              })
          }
      ]
  },
  // externals: {
  //     jquery: 'jQuery',
  //     react:'React',
  //     'react-dom':'ReactDOM'
  // },
  // devServer:{
  //     compress: true,
  //     port: 9000
  // },
  plugins:[
      new ExtractTextPlugin({
          filename:'css/bundle[chunkhash:8].css',
          disable:false,
          allChunks:true,
      }),
      uglify
  ]
}
