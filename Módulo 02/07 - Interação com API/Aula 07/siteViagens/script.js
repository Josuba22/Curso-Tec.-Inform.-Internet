async function buscar(){
    let procura = await fetch('listaLocais.json');
    let locais = await procura.json();

    let listaDiv = document.getElementById('container');

    for(let local of locais){
        listaDiv.innerHTML +=`
            <div class="cards" data-id="${local.id}">
                <div class="cards-img">
                        <img 
                            src="${local.img}"
                            width="40%"
                            height="auto"
                        >
                </div>
    
                <div class="cards-info">
                    <div class="nome">
                        <h3> ${local.nome} </h3>
                    </div>
    
                    <div class="descricao">
                        <p class="local-descricao"> ${local.descricao} </p>
                    </div>
                </div>
            </div>
        `
    }

    let elementosCards = document.querySelectorAll(".cards")
    //se for usar o IN a estrutura é desse modo:
    /*for(let card in elementosCards){
        elementosCards[card].addEventListener()
    }*/
    for(let card of elementosCards){
        card.addEventListener("click", cliqueCard)
    }
}

buscar ()