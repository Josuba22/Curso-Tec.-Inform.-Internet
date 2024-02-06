/*function clicou(){
    document.getElementById("t1").textContent = parseInt(Math.random() * 11)
}*/

/*function clicou(){
    document.getElementById("t1").style.color = "rgb(100, 200, 50)"
}*/

/*function clicou(){
    let r = 100
    let g = 200
    let b = 50
    document.getElementById("t1").style.color = `rgb(${r}, ${g}, ${b})`
}*/

function clicou(){
    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)
    
    document.getElementById("t1").textContent = parseInt(Math.random() * 11)
    document.getElementById("t1").style.color = `rgb(${r}, ${g}, ${b})`
}