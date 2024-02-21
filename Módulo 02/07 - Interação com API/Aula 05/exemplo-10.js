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
                <div class="grupo-img">
                    <a href="produtos-10.html">
                        <img
                            src="${produto.img}" 
                            width="auto" 
                            height="auto"
                        >
                    </a>
                </div>

                <div class="textos">
                    <h3> ${produto.nome} </h3>
                    <p> ${produto.descricaoBreve} </p>
                    <div>
                        <span class="semDesconto">
                                R$ ${(produto.valorSemDesconto).toFixed(2).replace(".",",")} <!-- O comando replace() serve para substituir um simbolo ou string por outra, no caso do exemplo, o ponto (.) pela vírgula (,). -->
                        </span>
                        <br>
                        <span class="comDesconto">
                                R$ ${(produto.valorComDesconto).toFixed(2).replace(".",",")} <!-- O comando toFixed(2) serve para definir a quantidade de casas decimais após a vírgula. -->
                        </span>
                    </div>
                </div>
            </div>
        `
    }

}

busca()