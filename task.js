const statusDisplay = document.getElementById("status");
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerText = currentPlayerTurn();


let reset =document.getElementById("reset");
reset.addEventListener("click" ,()=>{
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();

    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");

})

let cell0=document.getElementById("cell0")
cell0.addEventListener("click",()=>{
    if (gameState[0] !== "" || !gameActive) 
        return;
    else gameState[0]=currentPlayer;
    cell0.innerText=currentPlayer;
    handleResult();
})

let cell1=document.getElementById("cell1")
cell1.addEventListener("click",()=>{
    if (gameState[1] !== "" || !gameActive) 
        return;
    else
    gameState[1]=currentPlayer;
    cell1.innerText=currentPlayer;
    handleResult();
})

let cell2=document.getElementById("cell2")
cell2.addEventListener("click",()=>{
    if (gameState[2] !== "" || !gameActive) 
        return;
    else
    gameState[2]=currentPlayer;
    cell2.innerText=currentPlayer;
    handleResult();
})

let cell3=document.getElementById("cell3")
cell3.addEventListener("click",()=>{
    if (gameState[3] !== "" || !gameActive) 
        return;
    else
    gameState[3]=currentPlayer;
    cell3.innerText=currentPlayer;
    handleResult();
})

let cell4=document.getElementById("cell4")
cell4.addEventListener("click",()=>{
    if (gameState[4] !== "" || !gameActive) 
        return;
    else
    gameState[4]=currentPlayer;
    cell4.innerText=currentPlayer;
    handleResult();
})

let cell5=document.getElementById("cell5")
cell5.addEventListener("click",()=>{
    if (gameState[5] !== "" || !gameActive) 
        return;
    else
    gameState[5]=currentPlayer;
    cell5.innerText=currentPlayer;
    handleResult();
})

let cell6=document.getElementById("cell6")
cell6.addEventListener("click",()=>{
    if (gameState[6] !== "" || !gameActive) 
        return;
    else
    gameState[6]=currentPlayer;
    cell6.innerText=currentPlayer;
    handleResult();
})

let cell7=document.getElementById("cell7")
cell7.addEventListener("click",()=>{
    if (gameState[7] !== "" || !gameActive) 
        return;
    else
    gameState[7]=currentPlayer;
    cell7.innerText=currentPlayer;
    handleResult();
})

let cell8=document.getElementById("cell8")
cell8.addEventListener("click",()=>{
    if (gameState[8] !== "" || !gameActive) 
        return;
    else
      gameState[8]=currentPlayer;
    
    cell8.innerText=currentPlayer;
    handleResult();
})


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function handleResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    PlayerChange();
}

function PlayerChange() {
    if (currentPlayer === "X" )
        currentPlayer= "O"; 
    else 
        currentPlayer= "X";
  statusDisplay.innerText = currentPlayerTurn();
}