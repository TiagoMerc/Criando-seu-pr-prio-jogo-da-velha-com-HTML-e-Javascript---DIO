var jogador,  vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');

var vencedorSelecionado = document.getElementById('vencedor-selecionado');

var quadrados = document.getElementsByClassName("quadrado");

mudarJogador('X');

function escolherQuadrado(id) {

  var quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== "-") {
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000'; 

  /* Checagem do jogador da vez */
  if (jogador == 'X') {
    jogador = "O";
  } else {
    jogador = "X";
  }

  mudarJogador(jogador);
  checaVencedor();
} 

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
} 

function checaVencedor() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);
/*Sequencia da primeira linha */
  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
/*Sequencia da segunda linha */
  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;

  }
/*Sequencia da terceira linha */
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
/*Sequencia da 1 - 4 - 7 */
if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
  mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
  mudarVencedor(quadrado1);
  return;

}

/*Sequencia diagoma 1 - 5 - 9 */
  if (checaSequencia(quadrado1, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;

  }
}

function mudarVencedor(quadrado){
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}




 function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){

  quadrado1.style.background = '#0f0';
  quadrado2.style.background = '#0f0';
  quadrado3.style.background = '#0f0';

 }

function checaSequencia(quadrado1,quadrado2, quadrado3) {
 var Eigual = false;

 if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
   Eigual = true;
 }

 return Eigual;
}