console.log ("Rock Paper Scissors");

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceButton = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButton.forEach(button=>button.addEventListener('click',()=>{

    player = button.textContent;
    compTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWin();
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
        
}}

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

// loop back to beginning ("Rock Paper Scissors");