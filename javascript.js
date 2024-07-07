// Create variable to store computer choice
// Then create function to call for computer choice
// Now I want to assign numerical computer choice to one of three values: "rock", "paper" or "scissors", I will use 'if' statement

let computerChoice = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * (4 - 1))
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

function getHumanChoice() {
    if (humanChoice == "rock") {
        return "Rock";
    } else if (humanChoice == "paper") {
        return "Paper";
    } else if (humanChoice == "scissors") {
        return "Scissors";
    }
}

// Create variable to store a score for computer choice
// Create variable to store a score for human choice

let computerScore = 0;
let humanScore = 0;

// Now I need to write a function that compares human and computer choices and gives points to the winner
// Need to assign values to rock/paper/scissors

function playRound() {
    if (humanChoice == "rock" && computerChoice == 0) {
        return "It's a draw :|";
    } else if (humanChoice == "rock" && computerChoice == 1) {
        computerScore = ++computerScore
        return "You lost! Paper beats rock :(";
    } else if (humanChoice == "rock" && computerChoice == 2) {
        humanScore = ++humanScore
        return "You won! Rock beats scissors :D";
    }

    if (humanChoice == "paper" && computerChoice == 0) {
        humanScore = ++humanScore
        return "You won! Paper beats rock :D";
    } else if (humanChoice == "paper" && computerChoice == 1) {
        return "It's a draw :|";
    } else if (humanChoice === "paper" && computerChoice == 2) {
        computerScore = ++computerScore
        return "You lost! Scissors beats paper :(";
    }

    if (humanChoice == "scissors" && computerChoice == 0) {
        computerScore = ++computerScore
        return "You lost! Rock beats scissors :(";
    } else if (humanChoice == "scissors" && computerChoice == 1) {
        humanScore = ++humanScore
        return "You won! Scissors beats paper :D";
    } else if (humanChoice == "scissors" && computerChoice == 2) {
        return "It's a draw :|";
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(playRound());
console.log(computerScore);
console.log(humanScore);