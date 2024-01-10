function coletarDados() {
    let nome = prompt("Digite seu nome")
    let idade = prompt("Digite sua idade")
    let altura = prompt("Digite sua altura")
    
    document.getElementById("nome").textContent = nome
    document.getElementById("idade").textContent = idade
    document.getElementById("altura").textContent = altura
}