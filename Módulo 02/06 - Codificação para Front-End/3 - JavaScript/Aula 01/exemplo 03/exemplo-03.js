/*function criarElemento () {
    let elemento = document.createElement('h2')
    elemento.textContent = 'Olá'
    document.body.appendChild(elemento)
}*/

function criarElementoDiv () {
    let elementoDiv = document.createElement('div')
    elementoDiv.style.border = 'solid'
    elementoDiv.style.borderColor = 'Navy blue'
    elementoDiv.style.borderWidth = '2px'
    elementoDiv.style.width = 'fit-content'
    document.body.appendChild(elementoDiv)

    let elementoTXT = document.createElement('h2')
    elementoTXT.textContent = 'Olá mundo'
    elementoDiv.appendChild(elementoTXT)
}