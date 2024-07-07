// Create variable to store computer choice
// Then create function to call for computer choice
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

// Create variable to store human choice from user input
// Create function to call for human choice

let humanChoice = prompt("Choose: Rock/Paper/Scissors").toLowerCase();

function getHumanChoice () {
    if (humanChoice == "rock") {
        return "Rock";
    } else if (humanChoice == "paper") {
        return "Paper";
    } else if (humanChoice == "scissors") {
        return "Scissors";
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());