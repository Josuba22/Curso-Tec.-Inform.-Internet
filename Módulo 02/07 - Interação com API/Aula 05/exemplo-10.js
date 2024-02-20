async function busca(){
    //como o arquivo json é LOCAL, add o arquivo diretamente no fetch
    //o fetch faz uma BUSCA no json
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()
    //console.log(produtos)

    let listaDiv = document.getElementById("lista-card")

    //o of no for pega o conteudo do objeto
    for(let produto of produtos){
        listaDiv.innerHTML += `
            <div class="card">
                <a href="#">
                    <img
                        src="${produto.img}" 
                        width="250" 
                        height="auto"
                    >
                </a>
                <h3> ${produto.nome} </h3>
                <p> ${produto.descricao} </p>
                <br>
                <div>
                    <span class="semDesconto">
                            R$ ${(produto.valorSemDesconto).toFixed(2).replace(".",",")}
                    </span>
                    <span class="comDesconto">
                        <b>
                            R$ ${(produto.valorComDesconto).toFixed(2).replace(".",",")}
                        </b>
                    </span>
                </div>
            </div>
        `
    }

}

busca()