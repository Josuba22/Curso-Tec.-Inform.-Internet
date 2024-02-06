function addUm() {
    let elemento = document.getElementById("t1");
    elemento.textContent = parseInt(elemento.textContent) + 1 // parseInt converte uma string para um número inteiro
}

function somarUm() {
    let elemento = document.getElementById("t1");
    elemento.textContent = parseFloat(elemento.textContent) + 1 // parseFloat converte uma string para um número do tipo float
}

function subtrairUm() {
    let elemento = document.getElementById("t1");
    elemento.textContent = parseFloat(elemento.textContent) - 1 // parseFloat converte uma string para um número do tipo float
}