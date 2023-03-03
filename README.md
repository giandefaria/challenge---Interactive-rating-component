<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/giandefaria/challeng-interactive-card-details-form-main"
  />
  <image
  src="https://img.shields.io/github/languages/top/giandefaria/challeng-interactive-card-details-form-main"
  />
  <image
  src="https://img.shields.io/github/last-commit/giandefaria/challeng-interactive-card-details-form-main"
  />
  <image
  src="https://img.shields.io/github/watchers/giandefaria/challeng-interactive-card-details-form-main"
  />
</p>

# 📋 Índice do projeto


- [Proposta do projeto](#id01)
- [Visual do projeto](#id04)
- [Feito com](#id05)
- [Autor](#id07)

# Proposta do projeto <a name="id01"></a>

O layout do projeto é baseado nesse challenge do site Frontend Mentor: https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI


O objetivo é criar uma página interativa onde o usuário fornece uma nota de feedback no serviço, e a nota escolida terá que aparecer em uma mensagem final em uma segunda tela.

Para executar esse projeto basta executar o arquivo index.html.


# Visual do projeto <a name="id04"></a>

<p align="center">

* Design da página principal no desktop
<image
src="./images/desktop-view.png"
/>

</p>

<p align="center">

* Design da página principal no celular
<div align="center">
  <image
  src="./images/mobile-view.png"
  />
</div>

</p>

# 🛠 Feito com <a name="id05"></a>

<br />

- [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [CSS]
- [HTML]

<br />


# Autor <a name="id07"></a>

<br />

- Frontend Mentor - [@giandefaria](https://www.frontendmentor.io/profile/giandefaria)
- Linkedim - [Gian de Faria](www.linkedin.com/in/gianfaria)
- GitHub - [giandefaria](https://github.com/giandefaria)



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
