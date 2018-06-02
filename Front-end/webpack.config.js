var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  entry: { main: ['./src/index.tsx'] },
  output: {
    path: path.resolve('./bundles'),
    publicPath: '/bundles/',  // Used by webpack-dev-server
    // or '[name]-[hash].js' if you can dynamically load JS, so you don't have to always invalidate cache.
    filename: '[name].js'
  },
  devtool: 'source-map',  // for debugging

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' })
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
      // not quite sure what to do about the source map loader
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}