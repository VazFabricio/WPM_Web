const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wd1 = document.getElementById(`wd1`);
let pontuacao = 0;

let arr = new Array(5);

function novaLetra() {
  const indice = Math.floor(Math.random() * letras.length);
  let letraAleatoria = letras[indice];
  return letraAleatoria;
}


for (let i = 0; i < arr.length; i++) {
  arr[i] = novaLetra();
}

for (let i = 1; i <= arr.length; i++) {
  let wd = document.getElementById(`wd${i}`);
  wd.innerHTML = arr[i - 1];
}


let inputAtual = document.getElementById('input_box');

inputAtual.addEventListener('input', function() {
  let inputValor = inputAtual.value;
  let atual = wd1.textContent;

  if (inputValor === atual) {
    wd1.classList.add('correto');
    wd1.classList.remove('incorreto');
  } else {
    wd1.classList.add('incorreto');
    wd1.classList.remove('correto');
  }
});


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
      wd1.classList.remove('correto')
    }
  }
});
