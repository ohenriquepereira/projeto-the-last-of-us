/* 

OBJETIVO-quando clícarmos no botão temos que
mostrar a imagem de fundo correspondente

*/

const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
 
botoescarrossel.forEach((botao, indice) => {
   botao.addEventListener('click',() => {
      
      desativarBotaoSelecionado();

       selecionarBotaoCarrosel(botao);

       esconderImagemAtiva();

      mostrarImagemDeFundo(indice);
   })
})

function mostrarImagemDeFundo(indice) {
   imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
   botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
   const imagemAtiva = document.querySelector('.ativa');
   imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
   const botaoselecionado = document.querySelector('.selecionado');
   botaoselecionado.classList.remove('selecionado');
}
