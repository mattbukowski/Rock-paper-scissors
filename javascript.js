//Reference to the buttons, getting me acces to it
const buttons = document.querySelectorAll("[data-selection]")

const finalColumn = document.querySelector("[data-final-column]")
const computerScore = document.querySelector("[data-computer-score]")
const yourScore = document.querySelector("[data-your-score]")
//Variable of possible choices with information who beats who
const CHOICES = [
    {
        name: "ROCK",
        emoji: "✊",
        beats: "SCISSORS",
    },
    {
        name: "PAPER",
        emoji: "✋",
        beats: "ROCK",
    },
    {
        name: "SCISSORS",
        emoji: "✌️",
        beats: "PAPER",
    }
]
//Give me information what was clicked by user
buttons.forEach(button => {
    button.addEventListener("click", e => {
        const selectionName = button.dataset.selection
        const selection = CHOICES.find(selection => selection.name === selectionName)
        playRound(selection);
    })
})

function playRound(selection) {
    const computerChoice = getComputerChoice()
    const userWin = isWinner(selection, computerChoice);
    const computerWin = isWinner(computerChoice, selection);

    addSelectionResult(computerChoice, computerWin)
    addSelectionResult(selection, userWin)

    if (userWin) incrementScore(yourScore)
    if (computerWin) incrementScore(computerScore)
}

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement("div")
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choice];
}

function isWinner(selection, computerChoice) {
    return selection.name === computerChoice.beats
}