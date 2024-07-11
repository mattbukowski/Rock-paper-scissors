//I will start over here
// Create new variables for human and computer scores, also for round result

let playRoundResult;
let computerScore = 0;
let humanScore = 0;

//Create variable to store computer choice
//Create funtion to get computer choice

//let choice = Math.floor(Math.random() * 3) + 1;

//function getComputerChoice() {
//if (choice === 1) return "ROCK";
// if (choice === 2) return "PAPER";
// return "SCISSORS";
//}

//Create variable to store human choice

//let humanChoice = prompt('Choose: Rock/Paper/Scissors', '');

//Assign human and computer choices to the variables
//Human choice is turn to upper case
//const playerSelection = humanChoice.toUpperCase();
//const computerSelection = getComputerChoice();

//Create function to play single round

//function playRound(playerSelection, computerSelection) {
//const win = (computerSelection === "ROCK" && playerSelection === "PAPER") || (computerSelection === 'SCISSOR' && playerSelection === //'ROCK') || (computerSelection === 'PAPER' && playerSelection === 'SCISSOR');
//if (computerSelection === playerSelection) return "It's a draw :|";
//if (win) {
//    humanScore++;
//    return "You win!";
//}
//computerScore++;
//return "You lose!";
//}

//Assign func playRound to the variable playRoundResult

//playRoundResult = playRound(playerSelection, computerSelection);


//Create function for 5 round game

const playGame = function playGame() {
    for (let i = 0; i < 5; i++) {
        let choice = Math.floor(Math.random() * 3) + 1;
        function getComputerChoice() {
            if (choice === 1) return "ROCK";
            if (choice === 2) return "PAPER";
            return "SCISSORS";
        }
        function playRound(playerSelection, computerSelection) {
            const win = (computerSelection === "ROCK" && playerSelection === "PAPER") || (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') || (computerSelection === 'PAPER' && playerSelection === 'SCISSORS');
            if (computerSelection === playerSelection) return "It's a draw :|";
            if (win) {
                humanScore++;
                return "You win!";
            }
            computerScore++;
            return "You lose!";
        }
        let humanChoice = prompt('Choose: Rock/Paper/Scissors', '');
        const playerSelection = humanChoice.toUpperCase();
        const computerSelection = getComputerChoice();
        playRoundResult = playRound(playerSelection, computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player pick: ${playerSelection}`);
        console.log(`Computer pick: ${computerSelection}`);
    }
}

playGame();

console.log(`Computer score: ${computerScore}`);
console.log(`Player score: ${humanScore}`);