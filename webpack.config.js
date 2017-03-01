const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const Parts = require('./webpack.parts')

const DEV_SERVER_PORT = '3000'

module.exports = function(env) {
  if(env === 'production') {
    return merge([
      Common,
      Parts.devTool(env),
      Parts.CSS(env),
      Parts.plugins(env)
    ])
  }
  else {
    // DEV gets the Dev Server
    return merge([
      Common,
      Parts.devServer(DEV_SERVER_PORT),
      Parts.devTool(env),
      Parts.CSS(env),
      Parts.plugins(env)
    ])
  }
}

const Common = merge([
  {
    entry: {
      main: './src/index.js'
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'public'),
      filename: '[name].bundle.js' // From entry key
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        // ESLint loader for all builds
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          use: [ 'eslint-loader' ]
        },

        // Babel loader for all builds
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'react',
                  ['es2015', { "modules": false } ]
                ]
              }
            }
          ]
        },

        // Assets loaders
        {
          test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
          loader: 'url-loader?limit=10000'
        },
        {
          test: /\.(gif|jpg|png)/,
          exclude: /(node_modules|bower_components)/,
          loader: 'url-loader?limit=10000'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src', 'template.html'),
        inject: 'body'
      })
    ]
  }
])
