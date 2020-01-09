const path = require('path');  /*se instancia el modulo de path de node*/
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// webpack-dev-server es un CLI (command line interface) que se puede 
// usar para hacer un entorno de desarrollo de manera sencilla, ya que de
// manera nativa recargará los archivos que se modifiquen en tiempo real.

// webpack-dev-server usará webpack con un servidor de desarrollo cuya 
// funcionalidad principal es la recarga en vivo. Esto debe usarse para 
// desarrollo solamente porque estará escuchando los cambios que se realicen
// en tiempo real, lo que es una carga innecesaria en memoria, porque los 
// archivos en servidores de producción no deberían cambiar seguido, haciendo 
// insostenible el uso intensivo de la aplicación.

// webpack-dev-server utiliza webpack-dev-middleware por debajo, que 
// proporciona un acceso rápido en memoria a los assets de webpack.

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
  devServer: {
    // Activa el HotModuleReplacementPlugin que muestra los cambios sin actualizar la página
    hot: true,
    // Al crear un servidor de prueba con webpack-dev-server éste tomará por defecto el puerto 8080, acá podrás cambiar el puerto.
    port: 3000,
    // Abrirá el navegador al iniciar el servidor
    open: true,
    // Dominios que permitirá el servidor utilizar
    // allowedHosts: 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          /* {
            loader: MiniCSSExtractPlugin.loader
          },*/
          'style-loader',       
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // Hot Module Replacement (HMR) es un plugin de Webpack que
    // permite intercambiar, agregar o eliminar módulos en tiempo 
    // de ejecución, sin una recarga completa de la página.
    // Para activarlo lo tienes que importar desde webpack, 
    // agregarlo como plugin y en el devServer agregar la propiedad hot
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server'
    }),
    // Lo comento ya que esto es para pro (minifica etc, lo 
    // que ralentiza el desarrollo)
    /* new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    }) */
  ]
}