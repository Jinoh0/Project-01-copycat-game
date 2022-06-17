const aPress = document.getElementById("aPress");
const bPress = document.getElementById("bPress");
const cPress = document.getElementById("cPress");
const dPress = document.getElementById("dPress"); 

const fourty = [aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress,aPress,bPress, cPress, dPress]
const gameOrder = fourty.sort(()=> Math.random() - 0.5);
console.log(gameOrder)

const currentPlayer = new Player;

const welcome = document.getElementsByClassName("welcome");
const gameBoard = document.getElementsByClassName("game-board");
const gameOver = document.getElementsByClassName("game-over");

const openGame = document.getElementsByClassName("openBtn");
const startBtn = document.getElementsByClassName("startBtn");
const tryAgain = document.getElementsByClassName("try-again-btn");

const allBtns = document.querySelectorAll(".gameBtn")


let counterTurn = 0;

function playSequence () {
    disableBtns()
    let counter = 0;
    let shouldClear = true;
    const vel = 500;

    const interval = setInterval(() => {

        let slice2 = gameOrder.slice(0,counterTurn)
        console.log(slice2)
        console.log(counter)
        const indiceGabarito = gameOrder[counter];
        const colorBtn = userInput[indiceGabarito];
        const btn = document.getElementById(colorBtn); 

        if (shouldClear) {
            gameOrder[counter].classList.add("highlight") 
        }else{           
            gameOrder[counter].classList.remove("highlight") 
            counter++;          
        }
        if (counter === slice2.length){
            clearInterval(interval)
            enableBtns()
        }
        shouldClear = !shouldClear;
    }, vel);
}


function enableBtns(){
    allBtns.forEach((botao)=> {
        botao.removeAttribute("disabled");       
    })
}

function disableBtns(){
    allBtns.forEach((botao)=> {
        botao.setAttribute("disabled","disabled");        
    })
}

const openTheGame = 
    openGame[0].addEventListener("click",() =>{
        startGame()
        enableBtns()
    })


const startTheGame =
    startBtn[0].addEventListener("click",()=>{
        counterTurn++
        playSequence()
        userInput = [];       
    })

function startGame () {
    welcome[0].style.display="none"
    gameBoard[0].style.display="flex"    
}

// //botao de tente novamente
const try2 = document.createElement("button")
try2.addEventListener("click",()=>{
    document.location.reload()   
    userInput = []; 
})

function checkTurn (userIndex,gameBoardIndex) {
    console.log(userIndex)
    console.log(gameBoardIndex)
   if (userIndex === gameBoardIndex){
    if (userInput.length === counterTurn){       
        window.alert("GENIUS! PARA CONTINUAR PARA O PROXIMO ROUND , CLIQUE EM START GAME E AGUARDE A SEQUENCIA!")
    }
    return;
   }else{
    window.alert("voce perdeu UMA vida, observe a sequencia com muita atencao para nao errar ! Vou repetir a sequencia quando voce clicar em ok , esta pronto?")
    loseLife(currentPlayer);
     userInput = [];
   }
}

function loseLife (Player) {
    Player.life --;
    if (Player.life === 0) {
        window.alert("VOCE PERDEU!!! Obrigado por tentar meu jogo , infelizmente suas vidas acabaram , agora volte ao trabalho.")
        gameBoard[0].append(try2);
        document.location.reload()  
        disableBtns()
        userInput = [];        
    }else{
        playSequence();
        userInput = [];        
    }
}


let userInput = [];

    aPress.addEventListener("click", ()=>{       
        userInput.push(aPress)        
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);        
    })

    bPress.addEventListener("click", ()=>{
        userInput.push(bPress)        
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);
    })

    cPress.addEventListener("click", ()=>{
        userInput.push(cPress)       
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);
    })

    dPress.addEventListener("click", ()=>{
        userInput.push(dPress)               
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);        
    })
    