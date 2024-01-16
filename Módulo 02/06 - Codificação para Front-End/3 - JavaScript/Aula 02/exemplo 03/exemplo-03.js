/* Neste exemplo, o ID do botão é 'botao' e o ID da imagem é 'luz'. O atributo onclick é usado para chamar a função alterarEstado() 
quando o botão é clicado. A função getElementById() é usada para obter a referência do elemento HTML com o ID especificado. */

//meu método

function alterarEstado1 () {
    let img = document.getElementById('luz');
    if (img.src.match('pic_bulboff.gif')) {
        img.src = 'pic_bulbon.gif';
    }
    else {
        img.src = 'pic_bulboff.gif';
}
}

//método do professor

function alterarEstado () {
    if (document.getElementById("luz").src.includes("pic_bulbon.gif")) {
        document.getElementById("luz").src = "pic_bulboff.gif"
    }
    else {
        document.getElementById("luz").src = "pic_bulbon.gif"
    }
}