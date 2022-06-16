// //START ELEMENTS
// const body = document.body
// const sctStart = document.createElement('section')
// sctStart.setAttribute('display' , 'show')
// sctStart.innerText = 'Hello welcome to my game!'
// body.append(sctStart)

// const startBtn =document.createElement('button')
// startBtn.innerText = "CLICK TO START"
// sctStart.append(startBtn);



// //GAME ELEMENTS
// const sctGame = document.createElement('section');
// const aBtn = document.createElement('button')
// aBtn.setAttribute('display' , 'show')
// const bBtn = document.createElement('button')
// aBtn.setAttribute('display' , 'none')
// const cBtn = document.createElement('button')
// aBtn.setAttribute('display' , 'none')
// const dBtn = document.createElement('button')
// aBtn.setAttribute('display' , 'none')

// body.append(sctGame,aBtn,bBtn,cBtn,dBtn);

// //GAME OVER ELEMENTS
// const sctGameOver = document.createElement('section')


// const startSection = document.getElementsByClassName("start");
// const startBtn = document.getElementsByClassName('startBtn');

// console.log(startSection)
// console.log(startBtn)

// const querytype = document.querySelector('.startBtn')

// querytype.classList.add("")
// console.log(querytype)

// const gameBoard = document.querySelector(".game-board")
// gameBoard.classList.add("show")

// const gameBoard2 = document.getElementsByClassName("game-board")
// gameBoard2.classList.add("show")

class Game {
    constructor(gameOrder) {
        this.gameOrder = gameOrder;
    }


    gameSetter (gameOrder){
            
        }

    
}



class Player {
    constructor() {
        this.life = 3;
    }

    catchInput(playerInput) {
        follow()

    }
}


//do total array , pega slice do round , depois essa slice eu pusho 1 por 1 cm settime
// settime com push funfa??
//BUG QUE TA INDO PISCAR TUDO DE UMA VEZ
//ACHAR UMA FORMA DE QUE TODA VEZ QUE O CARA PERDE UMA VIDA , O JOGO MOSTRA O CAMINHO DENOVO
//O START DO GAMEBOARD TEM QUE COMECAR QUANDO DER O START DO JOGO

//MELHORAR O CSS*******
//PASSAR AS FUNCOES PARA METODOS E CLASSES

//MELHORAR O BALANCEAMENTO DA RANDOMIZACAO DE KEYS
//TALVEZ MUDAR A MENSAGEMZINHA DE VIDA E GAMEOVER
//tamanho dos botoes desconfiguram de acordo comm a tela































