const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    descriptionFiles: ['package.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: 'awesome-typescript-loader',
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 5000,
    inline: true,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    disableHostCheck: true,
  },
};
