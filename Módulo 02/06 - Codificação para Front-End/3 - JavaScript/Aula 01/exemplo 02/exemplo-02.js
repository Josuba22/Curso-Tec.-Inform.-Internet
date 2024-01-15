//alert("olá mundo!")

/*function alterarTXT (alterarTXT) {
    document.getElementById("titulo2").textContent = "Bem-vindo 2024"
    document.getElementById("titulo2").style.color = "blue"
}*/

//modo otimizado

function alterarTXT (alterarTXT) {
    let elementoTXT = document.getElementById("titulo1")
    elementoTXT.textContent = "Bem-vindo 2024"
}

function alteraCor (alteraCor) {
    let elementoCor = document.getElementById("titulo2")
    elementoCor.style.color = "green"
}