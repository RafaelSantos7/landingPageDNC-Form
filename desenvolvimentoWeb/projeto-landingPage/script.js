var arrowRight = window.document.getElementById("arrowRight");
var arrowLeft = window.document.getElementById("arrowLeft");
var leo = window.document.getElementById("leo");
var samantha = window.document.getElementById("Samantha");
var bruna = window.document.getElementById("bruna");

function rolarParaDireita() {
    leo.style = "display: none"
    bruna.style = "display: flex"
    arrowRight.style = "display: none"
    arrowLeft.style = "display: flex"
}

function rolarParaEsquerda() {
    leo.style = "display: flex"
    bruna.style = "display: none"
    arrowRight.style = "display: flex"
    arrowLeft.style = "display: none"
}