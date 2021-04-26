const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  module: {
    rules: [{
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [

          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
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
      filename: './assets/css/styles.css'
    }),
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/app/index.html',
      hash: true
    }),
  ]
};