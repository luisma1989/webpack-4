const path = require('path');  /*se instancia el modulo de path de node*/
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* El siguiente codigo en realidad es igual a lo siguiente */
/* npx webpack  --entry ./index.js --output ./bundle.js --mode development */
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    /*direccion relativa de posicion actual*/
    path: path.resolve(__dirname, 'dist'), 
    /*nombre de bundel */
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },          
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    })
  ]
}