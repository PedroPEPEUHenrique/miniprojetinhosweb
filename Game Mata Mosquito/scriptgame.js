var altura = 0
var largura = 0
var vidas =1
var tempo = 60

var criatempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criatempo = 1500

} else if (nivel === 'dificil'){
    criatempo = 1000

} else if (nivel === 'chuck'){
    criatempo = 700

}


function ajustaPalcoJogo(){ 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'victory.html'
    }
    document.getElementById('cronometro').innerHTML = tempo
},1000)


function posicaorandom(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = "lose.html"
        }
        else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhorandom() + ' ' + ladorand()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhorandom(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladorand(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}