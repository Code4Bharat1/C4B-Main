const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // enables minification & tree-shaking
  entry: './src/index.js', // main JS entry
  output: {
    filename: 'bundle.[contenthash].js', // hashed filename for cache busting
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      // JS loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transpile modern JS
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // CSS loader
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Image loader
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // inline files < 8kb
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // remove unused JS
        terserOptions: {
          compress: {
            unused: true,
          },
        },
      }),
      new CssMinimizerPlugin(), // minify CSS
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // cleans /dist folder
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
  ],
};
