const path = require('path');  /*se instancia el modulo de path de node*/

/* El siguiente codigo en realidad es igual a lo siguiente */
/* npx webpack  --entry ./index.js --output ./bundle.js --mode development */
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js'),
  },
  mode: 'development',
  output: {
    /*direccion relativa de posicion actual*/
    path: path.resolve(__dirname, 'dist'), 
    /*nombre de bundel */
    filename: 'js/[name].js'
  }
}