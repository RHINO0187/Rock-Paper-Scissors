console.log ("Rock Paper Scissors");

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

// tell program Rock > Scissors > Paper > Rock

// declare winner and why

// loop back to beginningconsole.log ("Rock Paper Scissors");