import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('Quien eres?')

search(id)
    .then((data) => render(data))
    .catch((error) => console.error(error))
