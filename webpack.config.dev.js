const path = require('path')
const Dotenv = require('dotenv-webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  ...require('./webpack.config.prod'),
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'self'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  watchOptions: {
    ignored: ['/node_modules/']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, 'src'),
      __mocks__: path.resolve(__dirname, '__mocks__')
    }
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
      safe: path.resolve(__dirname, '.env.example')
    }),
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'test project',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/data'),
          to: 'data'
        }
      ]
    })
  ],
  optimization: {}
}
