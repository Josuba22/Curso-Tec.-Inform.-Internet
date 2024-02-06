let urlProdutos = "https://raw.githubusercontent.com/RamonMartins/Curso-Tec.-Inform.-Internet/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Consumir%20API/produtos.json"

async function procurar(){
    let resposta = await fetch(urlProdutos)
    let produtos = await resposta.json()
    console.log(produtos)

    for (let produto in produtos){
        //forma concatenada:
        //let div = document.body.innerHTML += "<h1 class='t1'>" + produtos[produto].nome + "</h1>"
        //forma sem concatenação (mais usada):
        let div = document.body.innerHTML += `
            <div class='div'>
                <p class='t1'> 
                    ${produtos[produto].nome} 
                </p>
                <img 
                src="${produtos[produto].img}" 
                alt="Não renderizou" 
                width="auto" 
                height="250"
                >
                <p>
                    ${produtos[produto].descricao}
                </p>
                <br>
                <span>
                    <b>
                        ${produtos[produto].valorSemDesconto}
                    </b>
                </span>
                <br>
                <span>
                    <b>
                        ${produtos[produto].valorComDesconto}
                    </b>
                </span>
            </div>
            `
    }

}

procurar()