// 01) Faça um programa que imprime no console do navegador o nome que o usuário informar no prompt depois de 3 segundos.

/*
let nome = prompt("Digite seu nome")

setTimeout(printNome, 3000)

function printNome(){
    console.log(nome)
}
*/

/* 02) Faça um programa que chama a função somar passando 2 valores, depois retorne e mostre em um alert o resultado da multiplicação 
desses valores.*/

/*
function somar(x,y){
    return x * y
}

alert(somar(3,5))
*/

// 03) Faça um programa que altera o valor de uma tag H2 no HTML, incrementando infinitamente o valor com +1 a cada 2 segundos.

/*
setInterval(incremento, 2000)

function incremento(){
    let h2 = document.getElementById("t2").textContent += 1
}
*/

/*
setInterval(incremento, 2000)

function incremento(){
    let h2 = document.getElementById("t2");
    let valor = parseInt(h2.textContent);
    h2.textContent = valor + 1;
}
*/
//forma resumida 1

setInterval(incremento, 2000)

function incremento(){
    document.getElementById("t2").textContent = parseInt(document.getElementById("t2").textContent) + 1;
}
//forma resumida 2

/*setInterval(incremento, 2000)

function incremento(){
    document.getElementById("t2").textContent++
}*/

/*Este código usa a função setInterval para executar a função anônima a cada 2 segundos. A função anônima seleciona a tag H2 com o ID “t2” 
no documento e incrementa seu valor em 1. O novo valor é então definido como o conteúdo da tag H2. Lembre-se de que, se você quiser parar a 
execução do código, precisará chamar a função clearInterval e passar o ID retornado pela função setInterval.*/

/* 04) Crie uma tag H3 no HTML contendo o texto "Olá mundo!" e faça com que a cor desse texto altere para uma cor aleatória a 
cada 4 segundos.*/

/*
setInterval(mudarCor, 4000)

function mudarCor(){
    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    document.getElementById("t3").style.color = `rgb(${r}, ${g}, ${b})`
}
*/

/* 05) Colete do usuário o ano que ele nasceu e o ano atual, após isso chame uma função passado esses dois valores, por fim, mostre em um alert
o resultado da subtração desses valores trazendo consequentemente a idade dele em um texto concatenando: "Sua idade é de {x} anos".*/

/*
let anoNascimento = prompt("Digite o ano do seu nascimento")
let anoAtual = prompt("Digite o ano atual")

function calcIdade(){
    return (anoAtual - anoNascimento)
}

alert("Sua idade é de " + calcIdade() + " anos.")
*/

/* 06) Crie um objeto carro, atribua a ele as seguintes características: "marca", "modelo", "ano" e "cor", com seus respectivos valores. Após
isso monte */