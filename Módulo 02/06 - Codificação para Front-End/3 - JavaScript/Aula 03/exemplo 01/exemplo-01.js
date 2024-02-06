/*let x = prompt("Digite o 1º número")
let y = prompt("Digite o 2º número")*/

/*subtrair(x, y)*/

//exibindo dentro de um alert
/*function subtrair(a, b){
    alert("A subtração de " + x + " - " + y + " = " + (x-y)) = document.getElementById("t1").textContent = (x - y)
}

//exibindo no corpo do body, na tag h1
function subtrair(a, b){
    document.getElementById("t1").textContent = "A subtração de " + x + " - " + y + " = " + (x-y)
}*/

function botao(){
    let x = prompt("Digite o 1º número")
    let y = prompt("Digite o 2º número")
    /*o operador && (AND) permitem realizar transações de comparação e combinação de valores booleanos
    , ou seja, valores que podem ser verdadeiros (true) ou falsos (false).*/
    if (x>0 && y>0){ 
        subtrair(x, y)
    } else{
        document.getElementById("t1").textContent = " "
    }
}

function subtrair(x, y){
    document.getElementById("t1").textContent = "A subtração de " + x + " - " + y + " = " + (x-y)
}
