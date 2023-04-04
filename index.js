const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wd1 = document.getElementById(`wd1`);
let pontuacao = 0;

function novaLetra() {
  const indice = Math.floor(Math.random() * letras.length);
  let letraAleatoria = letras[indice];
  wd1.innerHTML = letraAleatoria;
}

novaLetra();

let inputAtual = document.getElementById('input_box');

inputAtual.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    let atual = wd1.textContent;
    let valorInputAtual = inputAtual.value;
    let pontos = document.getElementById('pontos');
    if (atual === valorInputAtual) {
      pontuacao++;
      pontos.innerHTML = pontuacao;
      novaLetra();
      inputAtual.value = '';
    }
  }
});
