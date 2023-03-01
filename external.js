console.log ("Rock Paper Scissors");

const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceButton = document.querySelectorAll(".choiceButton")

let player; 
let computer;
let result;

choiceButton.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    compTurn();
}));

// create function for computer choice

function compTurn(){

const randNum = Math.floor(Math.random() * 3) + 1;

switch (randNum){
    case 1:
        computer = "Rock";
        break;
    case 2:
        computer = "Scissors";
        break;
    case 3:
        computer = "Paper";
        break;
        
}
console.log(randNum)}

compTurn();

// create function to get player choice

function playerTurn() {
    const input = document.querySelector('user-data');
    const data = input.value;
    // use data here
  }

// tell program parameters for game

function checkWin() {
    if (player == computer) {
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (Player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Paper"){
        return (Player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Scissors"){
        return (Player == "Rock") ? "You Win!" : "You Lose!"
    }
}

// loop back to beginningconsole.log ("Rock Paper Scissors");