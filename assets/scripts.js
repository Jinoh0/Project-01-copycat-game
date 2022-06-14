const fourty = ["aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress","aPress","bPress", "cPress", "dPress",]
const gameOrder = fourty.sort(()=> Math.random() - 0.5);
console.log(gameOrder)
const openGame = document.getElementsByClassName("openBtn");
const startBtn = document.getElementsByClassName("startBtn")
const tryAgain = document.getElementsByClassName("try-again-btn")

const aPress = document.getElementById("aPress");
const bPress = document.getElementById("bPress");
const cPress = document.getElementById("cPress");
const dPress = document.getElementById("dPress"); 


function roundCounter () {
    let counter = 0;
    startBtn.addEventListener("click" , () => {
        counter ++;
    })
    return counter;
}



function lead (gameOrder) {
const showLead = setInterval(() => {
    for (i=0 ; i<gameOrder.length; i++) {
        const turn = gameOrder.slice[0,counter]
        aPress.toggleAttribute(aPress.classList.add(aBtn:hover))
    }
},500)
}

function loseLife (Player.life) {
    Player.life --;
    if (Player.life =0) {
        break;
    }
}

function follow (aPress,bPress,cPress,dPress) {
    const userInput = [];

    aPress.addEventListener("click", ()=>{
        userInput.push("aPress")
    })

    bPress.addEventListener("click", ()=>{
        userInput.push("bPress")
    })

    cPress.addEventListener("click", ()=>{
        userInput.push("cPress")
    })

    dPress.addEventListener("click", ()=>{
        userInput.push("dPress")
    })

    for (i=0 ; i<userInput.length ; i++){
        if (userInput===gameOrder[i]) {
            continue;
        }
        else{
            loseLife()
        }
    }

}


function gameOver () {
    while (Player.life = 0) {
    clearInterval(showLead)
    tryAgain.classList.add('display','show')
    tryAgain.addEventListener("click", ()=>{
        lead();
        tryAgain.classList.remove('display','show')
    })
}
}
