const listaNotas = document.querySelectorAll(".botao-nota");

for (let contador = 0; contador < listaNotas.length; contador++) {
    
    const botoes = listaNotas[contador];
    console.log(botoes);
        
    botoes.onclick = function () {
        selecionaNota(contador);
    } 
}


function selecionaNota (contador) {
    console.log(listaNotas[contador].value);
    let nota = listaNotas[contador].value;
    sessionStorage.setItem("nota", nota);
}
