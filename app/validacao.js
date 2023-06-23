function verificaSeOchuteEumValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {

        elementoChute.innerHTML += '<div> Valor invalido Tente Novamente </div>'
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=`<div>valor inválido: Fale um numero entre ${menorValor} e ${maiorValor} </div>`
    }
    if(numero=== numeroSecreto){
        document.body.innerHTML = `
        <h2>Parabens você Acertou</h2>
        <h3> O número secreto era ${numeroSecreto} </h3>
        <button id= "jogar-novamente" class="btn-novamente">Jogar Novamente</button>
        `

    }if("game over"== "game over"){
        document.body.innerHTML = ` <h4>Fim de Jogo</h4>
        <button id= "jogar-novamente" class="btn-novamente">Jogar Novamente</button>`
    }
    else if (numero > numeroSecreto){
         elementoChute.innerHTML += `<div>O número secreto e menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto e maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }

}
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

