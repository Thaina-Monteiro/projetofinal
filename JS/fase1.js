function quiz (resposta){

var resposta = prompt ("Qual a questão correta?")

if (!resposta) {
    alert ("Reinicie o jogo!")
    location.href = "./index.html"
}

else if ( resposta === "2") {
    alert ("Você acertou!")
    location.href = "./fase2.html";
}

else if (resposta === "1") {
    alert ("Game Over")
    location.href = "./gameover.html" 
}

else {
    alert ("Game Over")
    location.href = "./gameover.html" 
}
}
onclick (resposta);