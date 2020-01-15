import '../css/index.css'
import search from './search'

const id = prompt('Quien eres?')

search(id)
    .then((data) => document.body.innerHTML = `<p>${data}</p>`)
    .catch((error) => console.error(error))
