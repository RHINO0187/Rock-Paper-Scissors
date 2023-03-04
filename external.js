console.log ("Rock Paper Scissors");

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceButton = document.querySelectorAll(".choiceButton");
const winNum = document.querySelector("#winNum");
const lossNum = document.querySelector("#lossNum");

let player;
let computer;
let result;
let win = 1;
let loss = 1;

choiceButton.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    compTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWin();
    winNum.textContent = winTally();
    lossNum.textContent = lossTally();
    //  need to figure out how to keep result, wins, and losses displayed
}));

// create function for computer choice

function compTurn(){
    
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch (randNum){
        case 1:
        computer = "Rock";
        break;
        case 2:
        computer = "Paper";
        break;
        case 3:
        computer = "Scissors";
        break;
        }
    }

// tell program parameters for game

function checkWin(){
    if(player == computer) {
        return "Draw!";
    }
    else if(computer == "Rock"){
        return(player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Paper"){
        return(player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Scissors"){
        return(player == "Rock") ? "You Win!" : "You Lose!"
    }
}
    function winTally() {
    if(computer == "Rock"){
        return(player == "Paper") ? win++ : console.log()
    }
    else if(computer == "Paper"){
        return(player == "Scissors") ? win++ : console.log()
    }
    else if(computer == "Scissors"){
        return(player == "Rock") ? win++ : console.log()
    }
}
    function lossTally() {
    if(computer == "Paper"){
        return(player == "Rock") ? loss++ : console.log()
    }
    else if(computer == "Scissors"){
        return(player == "Paper") ? loss++ : console.log()
    }
    else if(computer == "Rock"){
        return(player == "Scissors") ? loss++ : console.log()
    }
}
// loop back to beginning ("Rock Paper Scissors")