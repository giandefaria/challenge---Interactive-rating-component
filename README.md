>atualização: realizar o CSS da segunda página. 
# challenge---Interactive-rating-component
> Challenge site Frontend https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI

Objetivo é tentar criar um site o máximo possível semelhante ao exemplo do site. 
# Arquivo index.html
    *Nesse arquivo consta a primeira página, onde o usuário deverá dar o seu feedback selecionando uma nota a ser atribuída e, após a seleção, clica no botão submit. 
    *ao clicar no botão, será aberta a página voto.html

# Arquivo voto.html
    *Aqui temos a segunda página, a qual será aberta após selecionar o voto, onde consta uma mensagem de agradecimento e a nota que o usuário atribuiu.

# Arquivo style.css
    *Nesse arquivo constam os estilos atribuídos a alguns elementos, classes e Id's. 
    *Da linha 1 até a 87 temos os estilos que foram atribuídos à página index.html
    *Da linha 91 a 137 temos alguns estilos específicos da página voto.html.

# Arquivo script.js
    *Criei a const listaNotas para selecionar todos os botoes (linha 1)
    *Utilizei o for para montar uma lista (array) de todas as notas disponíveis (de 3 a 11)
    *O botão ao ser clicado (que seria um da lista de notas), executaria a função selecionaNota informando o valor (.value) que deverá ser imprimido de acordo com a array que será informada no parâmetro da função (linhas 13 a 18)
    *utilizei o sessionStorage para salvar a variável da nota selecionada, e assim aparecer na nova página. 
