async function busca(){
    let procura = await fetch("listaProdutos.json")
    let produtos = await procura.json()
    //console.log(produtos)
    let listaDiv = document.getElementById("lista_card")

    for(let produto of produtos){
        listaDiv.innerHTML +=`
            <div class="cards">
                <a href="#">
                    <img 
                        src="${produto.img}"
                        width="200px"
                        height="auto"
                    >
                </a>

                <h3> ${produto.nome} </h3>
                <p class="produto-descricao"> ${produto.descricaoBreve} </p>
                <span class="produto-com-desconto"> ${produto.valorComDesconto} </span>
                <span class="produto-sem-desconto"> ${produto.valorSemDesconto} </span>
            </div>
        `
    }
}

busca()