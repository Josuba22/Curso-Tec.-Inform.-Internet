async function busca(){
    //como o arquivo json é LOCAL, add o arquivo diretamente no fetch
    //o fetch faz uma BUSCA no json
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()
    console.log(produtos)

    let listaDiv = document.getElementById("lista-card")
    for(let x in produtos){
        listaDiv.innerHTML += `<h1> ${produtos[x].nome} </h1>`
    }

}

busca()