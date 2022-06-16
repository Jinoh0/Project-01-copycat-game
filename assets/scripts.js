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
let slice = [aPress,bPress,cPress,dPress] //cannot read properties of slice if changed

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
        const btn = document.getElementById(colorBtn); //isso eh problema?

        if (shouldClear) {
            // allBtns[0].classList.add("highlight");
            // userInput[indiceGabarito];    
            gameOrder[counter].classList.add("highlight") //MUDAR ISSO A SLICE EH O PEDACO QUE O JOGADOR VAI JOGAR NO ROUND      
        }else{
            // allBtns[0].classList.remove("highlight")
            gameOrder[counter].classList.remove("highlight") //MUDAR ISSO  
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
        // botao.removeAttribute("gameBtn:hover")
    })
}

function disableBtns(){
    allBtns.forEach((botao)=> {
        botao.setAttribute("disabled","disabled");
        // botao.setAttribute("gameBtn:hover")
    })
}




console.log(openGame)

// openGame[0].addEventListener("click",()=>{
//     startGame();
// })


// startBtn[0].addEventListener("click", () => {
//     playSequence()
//     const showLead = setInterval(() => {
//         const turn = gameOrder.slice(0,counter)
//         for (let i=0 ; i<turn.length; i++) {
//             // turn[i].toggleAttribute(aPressALLPRESS??.classList.add(aBtn:hover))
//             // ou entao varios ifs para checar se o [i] eh igual ao parametro escolhido para clicar?
//             // console.log('piscando')    
//         }
//         // console.log(gameOrder)
//         // console.log('piscou')
//         // console.log(turn)
//     },600)    
//     })


// aPress.classList.add('teste')
// console.log(aPress)

//settimeout



// let slowpush = setInterval(()=>{
//     slice[k]
//     gameOrder[k].classList.add("highlight")
//     k++
//     if (k = slice.length){clearInterval(slowpush)}

//     if (slice.classList.contains("none")){
//         document.querySelectorAll("gameBtn").forEach(elem => elem.pause())
//         gameOrder.forEach((gameBtn) => {gameBtn.classList.remove("highlight")})
//     }
// },1000)

    // let blink = setInterval(()=> {
    //     gameOrder[counter]
    //     document.querySelector(".gameBtn").classList.add("highlight")
    //     counter++
    //     if (counter === userInput){clearInterval(blink)}
    //     //parando
    //     if(document.querySelector(".gameBtn").classList.contains("none")){
    //         document.querySelector(".gameBtn")
    //     }
    // })





 //TOCANDO AS NOTAS DA SEQUENCIA
//  let k=0  OK ISSO EH MEU COUNTER
//  let id = setInterval(()=>{     EU COMECO DAQUI 
//    audio(sequencia[k])  ========= GAMEORDER(SLICE[COUNTER])
//    document.querySelector(`[data-key="${sequencia[k]}"]`).classList.add ("playing") ======SLICE[COUNTER].CLASSLIST.ADD("HIGHLIGHT")
//    k++ ======= COUNTER ++
//    if(k === dificuldade){clearInterval(id)} ====== IF (COUNTER === USERINPUT){CLEARINTERVAL(ID)}
//    //PARANDO DE TOCAR QUANDO VOLTAR AO MENU
//    if(piano.classList.contains("none")){ ========= IF (GAMEBTN.CLASSLIST.CONTAINS("NONE"))
//      document.querySelectorAll("audio").forEach( elem => elem.pause()) ======== GAMEBTN.FOREACH(ELEM => ELEM.PAUSE()) OQ EH O QUERYSELECTOR ALL AUDIO?
//      keys.forEach((key) => {key.classList.remove("playing")}) ======GAMEBTN.FOREACH((GAMEBTN)=>{GAMEBTN.CLASSLIST.REMOVE("HIGHLIGHT")})
//    }
//  },1500)
 

// setTimeout(() => {
    
//     for (let i = 0 ; i<slice.length ; i++) {  
//         setInterval(() => {       
             
//             console.log('dentro do settimeout')
//             slice[i].classList.add('highlight')
//         }, 2000);       
    
//         setInterval(() => {
//             slice[i].classList.remove('highlight')
//         }, 2500);
//     }
//     return slowpush
// },500);








// setTimeout(() => {
//     for (let i = 0 ; i<test2Arr.length ; i++) {  
//         setTimeout(() => {
            
//             console.log('dentro do settimeout')
//             test2Arr[i].classList.add('highlight')
//         }, 300);  
        
    
//         setTimeout(() => {
//             test2Arr[i].classList.remove('highlight')
//         }, 450);
    
//     }
// },1000);



// setInterval(() => {
//     for (let i = 0 ; i < slice.length ; i++) {
//         slowpush.push(slice[i])
//     }
//     setInterval(() => {       
//         for (let i = 0 ; i < slowpush.length ; i++)
//         console.log('dentro do settimeout')
//         slice[i].classList.add('highlight')
//     }, 2000);       

//     setInterval(() => {
//         for (let i = 0 ; i < slowpush.length ; i++)
//         slice[i].classList.remove('highlight')
//     }, 2500);
    
// },500)




// setInterval(() => {
//     slice.forEach((slice) ={
//         slowpush.push(slice[0])
//     })
    
// },500)


const startTheGame =
    startBtn[0].addEventListener("click",()=>{
        counterTurn++
        playSequence()
        userInput = [];
    })

const openTheGame = 
    openGame[0].addEventListener("click",() =>{
        startGame()
        enableBtns()
    })




function startGame () {
    welcome[0].style.display="none"
    gameBoard[0].style.display="flex"
    // gameOver[0].style.display="none"
}

//botao de tente novamente
const try2 = document.createElement("button")
try2.addEventListener("click",()=>{
    document.location.reload()   
    userInput = []; 
})
try2.innerText="Jogar novamente"
//botao de tente novamente


function loseLife (Player) {
    Player.life --;
    if (Player.life === 0) {
        window.alert("VOCE PERDEU!!!")
        gameBoard[0].append(try2);
        disableBtns()
        userInput = [];
        
    }else{
        playSequence();
        userInput = [];        
    }
}



function checkTurn (userIndex,gameBoardIndex) {
    console.log(userIndex)
    console.log(gameBoardIndex)
   if (userIndex === gameBoardIndex){
    if (userInput.length === counterTurn){
        window.alert("GENIUS! CLICK START GAME!")
    }
    return;
   }else{
    window.alert("voce perdeu UMA vida")
    loseLife(currentPlayer);
     userInput = [];
   }
}


let userInput = [];

    aPress.addEventListener("click", ()=>{
        userInput.push(aPress)
        console.log(userInput)
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);        
    })

    bPress.addEventListener("click", ()=>{
        userInput.push(bPress)
        console.log(userInput)
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);
    })

    cPress.addEventListener("click", ()=>{
        userInput.push(cPress)
        console.log(userInput)
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);
    })

    dPress.addEventListener("click", ()=>{
        userInput.push(dPress)
        console.log(userInput)        
        checkTurn(userInput[userInput.length-1],gameOrder[userInput.length-1]);        
    })

    






// function gameOver1 () {
//     while (Player.life = 0) {
//     clearInterval(showLead)
//     tryAgain.classList.add('display','show')
//     tryAgain.addEventListener("click", ()=>{
//         lead();
//         tryAgain.classList.remove('display','show')
//     })
// }
// }
