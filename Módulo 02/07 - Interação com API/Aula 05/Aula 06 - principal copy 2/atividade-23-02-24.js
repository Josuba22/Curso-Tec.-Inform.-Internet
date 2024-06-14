async function busca(){
    let procura = await fetch("listaProdutos.json")
    let produtos = await procura.json()
    //console.log(produtos)
    let listaDiv = document.getElementById("lista_card")

    for(let produto of produtos){
        listaDiv.innerHTML +=`
            <div class="cards">
                <div class="cards-img">
                        <img 
                            src="${produto.img}"
                            width="100%"
                            height="auto"
                        >
                </div>

                <div class="cards-info">
                    <div class="nome">
                        <h3> ${produto.nome} </h3>
                    </div>

                    <div class="descricao">
                        <p class="sinopse">Clique para ler a sinopse</p>
                        <div class="sinopse-expanded" style="display: none;">
                            <p>
                                ${produto.sinopse}
                            </p>
                        </div>
                    </div>

                    <div class="cards-info-valores">
                        <p><b> Ano Lançamento: </b></p>
                        <span class="anoLancamento"> ${produto.anoLancamento} </span>
                        <span class="duracao"> ${produto.duracao} min </span>
                    </div>
                </div>
            </div>
        `
    }
}

busca()

// URL da imagem que você deseja usar como plano de fundo
const imageUrl = 'https://i.pinimg.com/736x/69/a0/74/69a0748f21bfb47803845d88bab0a82a.jpg';

// Selecione o elemento body
const bodyElement = document.querySelector('body');

// Defina a imagem de fundo
bodyElement.style.backgroundImage = `url(${imageUrl})`;
bodyElement.style.backgroundSize = 'cover'; // Ajuste o tamanho conforme necessário
bodyElement.style.backgroundRepeat = 'no-repeat';
bodyElement.style.backgroundPosition = 'center center';

const navbar = document.querySelector('.navbar');

// Alternar classe para dispositivos móveis
function toggleMobileNavbar() {
    navbar.classList.toggle('mobile');
}

// Adicionar evento de clique ao ícone de menu
navbar.addEventListener('click', toggleMobileNavbar);

const sinopseElement = document.querySelector('.sinopse');
const expandedElement = document.querySelector('.sinopse-expanded');

let isExpanded = false;

sinopseElement.addEventListener('click', () => {
    if (isExpanded) {
        expandedElement.style.display = 'none';
        sinopseElement.textContent = 'Clique para ler a sinopse';
    } else {
        expandedElement.style.display = 'block';
        sinopseElement.textContent = 'Clique para recolher a sinopse';
    }
    isExpanded = !isExpanded;
});