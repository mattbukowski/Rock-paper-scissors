// Creat variable to store computer choice
// Then creat function to call for computer choice
// Now I want to assign numerical computer choice to one of three values: "rock", "paper" or "scissors", I will use 'if' statement

let computerChoice = 0;

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * (4-1))
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());