const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let arr = new Array(5);

for (let i = 0; i < arr.length; i++) {
  const indice = Math.floor(Math.random() * letras.length);
  let letraAleatoria = letras[indice];
  arr[i] = letraAleatoria;
}

for (let i = 1; i <= arr.length; i++) {
  let wd = document.getElementById(`wd${i}`);
  wd.innerHTML = arr[i - 1];
}

let pontos = 0;
let pontuacao = document.getElementById('pontos');
let inputAtual = document.getElementById('input');
let posicaoAtual = 0; // começa na primeira posição do array
inputAtual.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    let atual = document.getElementById(`wd${posicaoAtual + 1}`).textContent;
    let inputAtual = document.getElementById('input').value.toLowerCase();
    if (atual === inputAtual) {
      pontos++;
      console.log(pontos)
      posicaoAtual++;
    }
    inputAtual.value = ''; // limpa o input
  }
});
