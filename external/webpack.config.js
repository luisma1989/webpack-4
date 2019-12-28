const path = require('path');  /*se instancia el modulo de path de node*/

/* El siguiente codigo en realidad es igual a lo siguiente */
/* npx webpack  --entry ./index.js --output ./bundle.js --mode development */
module.exports = {
  entry: path.resolve(__dirname, 'index.js'), 
  mode: 'development',
  output: {
    /*direccion relativa de posicion actual*/
    path: path.resolve(__dirname, 'dist'), 
    /*nombre de bundel */
    filename: 'bundle.js'
  }
}