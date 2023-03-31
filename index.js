let wd1 = document.getElementById("wd1");

let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let letraAleatoria = letras[Math.floor(Math.random() * letras.length)];

wd1.innerHTML = letraAleatoria;


  