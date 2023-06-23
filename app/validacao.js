function verificaSeOchuteEumValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-novamente" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
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

    }else if (numero > numeroSecreto){
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

