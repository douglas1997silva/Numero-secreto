const menorValor= 1;
const maiorValor= 100;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)


function gerarNumeroAleatorio() {
     return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = maiorValor;