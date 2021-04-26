const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry:{   
     app:'./src/index.ts',
     styles: './src/assets/sass/styles.scss'
     }, 
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { plugins: [autoprefixer(), cssnano()] }},
          { loader: 'sass-loader' },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.ts', '.js', '.scss','.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
/*
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: path.resolve(__dirname, 'css'),
    publicPath: "/css" */
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.chunk.css',
    })
  ]
};
