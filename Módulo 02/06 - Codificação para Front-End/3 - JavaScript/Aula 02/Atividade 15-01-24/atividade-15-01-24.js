/*1) Use o comando alert para exibir o resultado da expressão 3+5.*/

//alert (3+5);

/*2)Crie uma variável chamada "nome" com o valor "Alice" e uma variável chamada "idade" com o valor 30. Use o comando alert para exibir uma 
mensagem concatenando o nome e a idade, como "Alice tem 30 anos".*/

/*let nome = "Alice";
let idade = 30;

alert (nome + " tem " + idade + " anos.")*/

/*3) Crie uma variável "preço" com o valor 24.99 e uma variável "quantidade" com o valor 5. Use o comando alert para exibir o resultado do
cálculo do preço total, ou seja, preço x quantidade.*/

/*let preço = 24.99
let quantidade = 5

alert (preço * quantidade);*/

/*4) Escreva uma expressão que verifica se o número 7 é maior do que 3 e use o comando "alert" para exibir o resultado como um valor booleano.*/

/*if (7 > 3) {
    alert ("verdadeiro!")
}

else {
    alert("Falso")
}*/

//outro meio:

/*let resultado = 7 > 3
alert(resultado)*/

/*otimizado:
alert(7>3)*/

/*5) Crie uma variável "nome", "idade" e "altura". Peça ao usuário para informar cada uma dessas informações, por fim, monte uma única
mensagem usando o comando alert contendo todas as informações.*/


//método 1:

/*let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let altura = prompt("Digite sua altura")

alert(nome + " tem " + idade + " anos e " + altura + " metros de altura.");*/

//método 2:

/*let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let altura = prompt("Digite sua altura:");

alert("Nome: " + nome + "\nIdade: " + idade + "\nAltura: " + altura);*/

/*6) Faça um programa onde o usuário informa um valor monetário na moeda Real Brasileira (R$) e converta esse valor para Dolar Americano (U$),
levando em consideração que U$ 1 Dólar custa R$ 4,90 Reais. Por fim, mostre o valor convertido.*/

/*let real = prompt("Digite o valor em Reais")
let cotacao = 4.90
let valorDolar = real / cotacao

alert("O valor em Dólar é: " + valorDolar.toFixed(2));*/

/*7) Peça ao usuário para informar um nome e depois mostre esse nome em um elemento H1 em uma página HTML.*/

/*let nome = prompt("Digite seu nome")
document.getElementById("nome").innerHTML = nome*/

document.getElementById("nome") = nome;

/*8) No HTML crie um paragráfo da cor AZUL e no JavaScript altere essa cor para VERMELHO.*/

/*document.getElementById("color").style.color = 'red'*/

/*9) Crie uma TAG HTML no JavaScript usando o comando createElement, e depois insira-o no HTML usando o comando appendChild.*/

/*function criarElemento() {
    let elementoTXT = document.createElement('h2')
    elementoTXT.textContent = 'Olá mundo'
    document.body.appendChild(elementoTXT)
}*/