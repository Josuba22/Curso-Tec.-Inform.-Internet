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

    document.title = produtos[indiceProd].nome

    document.body.innerHTML += `
        <h1> ${produtos[indiceProd].nome} </h1>
        <img src="${produtos[indiceProd].img}" height="auto" width="300" style="border: 1px solid #000; border-radius: 10px;">
        <p> ${produtos[indiceProd].descricaoBreve} </p>
        <div class="grupoValores">
            <span class="produto-com-desconto"> R$ ${(produtos[indiceProd].valorComDesconto).toFixed(2).replace(".", ",")} </span>
            <span class="produto-sem-desconto"> R$ ${(produtos[indiceProd].valorSemDesconto).toFixed(2).replace(".", ",")} </span>
        </div>
    `
}

procurar()