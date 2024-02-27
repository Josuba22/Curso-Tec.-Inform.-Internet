async function busca(){
    let procura = await fetch("listaProdutos.json")
    let produtos = await procura.json()
    //console.log(produtos)
    let listaDiv = document.getElementById("lista_card")

    for(let produto of produtos){
        listaDiv.innerHTML +=`
            <div class="cards" data-id="${produto.id}">
                <div class="cards-img">
                        <img 
                            src="${produto.img}"
                            width="160"
                            height="auto"
                        >
                </div>

                <div class="cards-info">
                    <div class="nome">
                        <h3> ${produto.nome} </h3>
                    </div>

                    <div class="descricao">
                        <p class="produto-descricao"> ${produto.descricaoBreve} </p>
                    </div>

                    <div class="cards-info-valores">
                        <span class="produto-sem-desconto"> R$ ${(produto.valorSemDesconto).toFixed(2).replace(".",",")} </span>
                        <span class="produto-com-desconto"> R$ ${(produto.valorComDesconto).toFixed(2).replace(".",",")} </span>
                    </div>
                </div>
            </div>
        `
    }

    let elementosCards = document.querySelectorAll(".cards")
    for(let card of elementosCards){
        card.addEventListener("click", cliqueCard) //ñ coloca o parentese de imediato na função "cliqueCard" para ñ ser executada logo
    }
}

busca()

function cliqueCard(){
    let elementoId = this.getAttribute("data-id")
    //alert("card " + elementoId)
    window.location.href = "detalhes.html?produtoid=" + elementoId
}








/*
let lista = ["maçã", "uva", "pera"]

//usando o "in" a variavel recebe o índice
//usando o "of" recebe o valor do item

for (let x of lista){
    alert(x)
}
*/