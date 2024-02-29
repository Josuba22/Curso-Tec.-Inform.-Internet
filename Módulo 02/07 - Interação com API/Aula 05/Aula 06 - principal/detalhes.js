async function verDetalhes(){
    let buscar = await fetch("listaProdutos.json")
    let produtos = await buscar.json()

    let parametrosURL = new URLSearchParams(window.location.search)
    //alert(window.location.search) //Debug do código
    let idProduto = parametrosURL.get("produtoid")
    //alert(idProduto) //Debug código

    let inProduto = null
    for(let x in produtos){
        if(produto[x].id == idProduto){
            inProduto = x
        }
    }

    document.body.innerHTML = `
        <h3> ${produtos[inProduto].nome} </h3>
        <p> ${produtos[inProduto].descricaoBreve} </p>
    `
}

verDetalhes()