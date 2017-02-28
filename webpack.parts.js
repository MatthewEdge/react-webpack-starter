const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// devtool config
exports.devTool = function(env) {
  if(env === 'production') {
    return {
      devtool: false // TODO what should this be?
    }
  }

  return {
    devtool: 'source-map'
  }
}

// Webpack-Dev-Server config
exports.devServer = function(devPort) {
  return {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      noInfo: true,
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: devPort,
      stats: 'errors-only'
    }
  }
}

// CSS Loader config
exports.CSS = function(env) {
  if (env === 'production') {
    return {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin({
          filename: '[name].css',
          allChunks: true
        })
      ]
    }
  }

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          ]
        }
      ]
    }
  }
}

// Webpack Plugins
exports.plugins = function(env) {
  if (env === 'production') {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    }
  }

  // Dev Plugins
  return {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}