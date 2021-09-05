const path = require('path')
const Dotenv = require('dotenv-webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'self'
  },
  devtool: 'none',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      __mocks__: path.resolve(__dirname, '__mocks__')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
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
      title: 'doctari test project',
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeTagWhitespace: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true
      }
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: false
          },
          output: { comments: false }
        }
      })
    ],
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
