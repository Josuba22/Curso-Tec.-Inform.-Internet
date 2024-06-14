let urlProdutos = "https://raw.githubusercontent.com/RamonMartins/Curso-Tec.-Inform.-Internet/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Consumir%20API/produtos.json"

async function buscar(){
    let resposta = await fetch(urlProdutos)
    //Esses comandos são apenas para debugar a resposta do código
    //alert(resposta)
    //console.log(resposta)
    let produtos = await resposta.json()
    //alert(produtos[1].descricao) //escolhendo uma única propriedade de um objeto em uma lista para ser exibida.
    //console.log(produtos[1])

//Forma braçal:
/*
    document.body.innerHTML += produtos[0].descricao + "<br>"
    document.body.innerHTML += produtos[1].descricao + "<br>"
    document.body.innerHTML += produtos[2].descricao + "<br>"
    document.body.innerHTML += produtos[3].descricao + "<br>"
    document.body.innerHTML += produtos[4].descricao + "<br>"
    document.body.innerHTML += produtos[5].descricao + "<br>"
    document.body.innerHTML += produtos[6].descricao + "<br>"
    document.body.innerHTML += produtos[7].descricao + "<br>"
    document.body.innerHTML += produtos[8].descricao + "<br>"
*/

//Forma simplicada:
/*
    for (let i = 0; i < produtos.length; i++){
        document.body.innerHTML += produtos[i].descricao + "<br>";
    }
}
*/

//outra forma simplificada:
/*
    for (let produto in produtos){
        //document.body.innerHTML += produtos[produto].nome + "<br>"
        document.body.innerHTML += `O nome do produto é ${produtos[produto].nome}
        <br>
        `
    }
*/

//construindo uma div no JS:
/*    for (let produto in produtos){
        document.body.innerHTML += `
        <div>    
            O nome do produto é ${produtos[produto].nome}
        </div>
        <br>
        `
    }
}

buscar()*/

//solução do GPT:

// Criando uma lista de produtos (exemplo)
/*const produtos = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça Jeans', preco: 59.99 },
    { nome: 'Tênis', preco: 79.99 }
  ];*/
  
  // Selecionando o elemento onde queremos adicionar as <div>
  //const container = document.querySelector('#produtos-container');
  
  // Usando o for para criar e estilizar as <div>
/*  for (let produto in produtos) {
    const divProduto = document.createElement('div');
    divProduto.textContent = `O nome do produto é ${produtos[produto].nome}`;
    
    // Estilização básica
    divProduto.style.border = '1px solid #ccc';
    divProduto.style.backgroundColor = '#f9f9f9';
    divProduto.style.marginBottom = '10px';
    
    // Adicionando a <div> ao container
    container.appendChild(divProduto);
  }
*/

//Outra solução pelo GPT:

    // Dados fictícios de produtos (substitua pelos seus dados reais)
    /*const produtos = [
        { nome: 'Produto A' },
        { nome: 'Produto B' },
        { nome: 'Produto C' }
        // ... adicione mais produtos se necessário
    ];*/

    // Seleciona a div pelo ID
    let divProduto = document.getElementById('produtoDiv');

    // Itera sobre os produtos e insere o nome na div
    for (let produto of produtos) {
        let nomeProdutoDiv = document.createElement('div');
        nomeProdutoDiv.textContent = produto.nome;
        document.getElementById('nomeProduto').appendChild(nomeProdutoDiv);
    }

    // Estiliza a div (opcional)
    divProduto.style.border = '2px solid #000'; // Borda preta
    divProduto.style.backgroundColor = '#fff'; // Fundo branco
    divProduto.style.marginBottom = '10px';
    // Adicione mais estilos conforme necessário

    // Adiciona uma quebra de linha após cada div
    let br = document.createElement('br');
    document.body.appendChild(br);
}

buscar()