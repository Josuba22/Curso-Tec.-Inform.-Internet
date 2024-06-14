async function busca(){
    let procura = await fetch("listaLivros.json")
    let livros = await procura.json()
    console.log(livros)
    let listaDiv = document.getElementById("lista_card")

    for(let livro of livros){
        listaDiv.innerHTML +=`
            <div class="cards">
                <div class="cards-img">
                        <img 
                            src="${livro.img}"
                            width="160"
                            height="auto"
                        >
                </div>

                <div class="cards-info">
                    <div class="nome">
                        <h3> ${livro.nome} </h3>
                    </div>

                    <div class="descricao">
                        <p class="livroDescricao"> ${livro.descricao} </p>
                        <p class="expandir" onclick="expandirDescricao(this)"> Leia mais </p>
                    </div>

                    <div class="cards-informacoes">
                        <span class="autor"> ${livro.autor} </span>
                        <span class="editora"> ${livro.editora} </span>
                        <span class="numPaginas"> ${livro.numeroPaginas} </span>
                        <span class="dataPubli"> ${livro.dataPublicacao} </span>
                    </div>
                </div>
            </div>
        `
    }
}

busca()

function expandirDescricao(elemento) {
    const descricao = elemento.previousElementSibling; // Pega o elemento .livro-descricao
    descricao.style.maxHeight = 'none'; // Expande a descrição completamente
    elemento.style.display = 'none'; // Esconde o link "Leia mais"
}

/*function expandirDescricao(elemento) {
    const descricao = elemento.previousElementSibling.querySelector('.livroDescricao'); // Pega o elemento .livroDescricao
    if (descricao.style.maxHeight === 'none') {
        descricao.style.maxHeight = null; // Recolhe a descrição
        elemento.textContent = 'Leia mais'; // Altera o texto do link
    } else {
        descricao.style.maxHeight = 'none'; // Expande a descrição completamente
        elemento.textContent = 'Recolher'; // Altera o texto do link
    }
}*/