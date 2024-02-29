async function procurar(){
    let buscar = await fetch("listaProdutos.json")
    let produtos = await buscar.json()

    let parametrosURL = new URLSearchParams(window.location.search)
    //alert(window.location.search) //Debug do código
    let idProduto = parametrosURL.get("prod-id")

    let indiceProd = null
    for(let x in produtos){
        if(produtos[x].id == idProduto){
            indiceProd = x
        }
    }

    document.body.innerHTML = `
        <h1> ${produtos[indiceProd].nome} </h1>
        <p> ${produtos[indiceProd].descricaoBreve} </p>
    `
}

procurar()