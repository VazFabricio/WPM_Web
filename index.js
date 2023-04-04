const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


const indice = Math.floor(Math.random() * letras.length);
let letraAleatoria = letras[indice];
let wd1 = document.getElementById(`wd1`);
wd1.innerHTML = letraAleatoria;


let pontuacao = 0;
inputAtual.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    let atual = document.getElementById(`wd1`).textContent;
    let inputAtual = document.getElementById('input_box').value;
    let pontos = documento.getElementById('pontos');
    if (atual === inputAtual) {
        pontuacao++;
        pontos.innerHTML = pontuacao;
      }
    }
});
