const rockBtn = document.querySelector("#rockBtn")
const paperBtn = document.querySelector("#paperBtn")
const scissorsBtn = document.querySelector("#scissorsBtn")


rockBtn.addEventListener("click", () => {
    playRound("rock")
})

paperBtn.addEventListener("click", () => {
    playRound("paper")
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors")
})

const roundDiv = document.querySelector("#roundDiv")
const playerSelectionDiv = document.querySelector("#playerSelectionDiv")
const computerSelectionDiv = document.querySelector("#computerSelectionDiv")
const roundResult = document.querySelector("#roundResult")
const playerScoreDiv = document.querySelector("#playerScoreDiv")
const computerScoreDiv = document.querySelector("#computerScoreDiv")
const gameResultDiv = document.querySelector("#gameResultDiv")

let playerScore = 0
let computerScore = 0
let round = 1



function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function restartGame() {
    round = 1
    playerScore = 0
    computerScore = 0
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    console.log(`Round: ${round}`)


    if (round == 1) {
        gameResultDiv.textContent = ""
        playerScoreDiv.textContent = `Player score: ${playerScore}`
        computerScoreDiv.textContent = `Computer score: ${computerScore}`
    }

    roundDiv.textContent = `Round: ${round}`

    playerSelectionDiv.textContent = `Player selection: ${playerSelection}`
    computerSelectionDiv.textContent = `Computer selection: ${computerSelection}`

    if (playerSelection == computerSelection) {
        roundResult.textContent = `Result: Draw`
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            roundResult.textContent = `Result: ${playerSelection} beats ${computerSelection}. Player wins.`
            playerScore++
            playerScoreDiv.textContent = `Player score: ${playerScore}`
        }
        else {
            roundResult.textContent = `Result: ${computerSelection} beats ${playerSelection}. Computer wins.`
            computerScore++
            computerScoreDiv.textContent = `Computer score: ${computerScore}`
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            roundResult.textContent = `Result: ${playerSelection} beats ${computerSelection}. Player wins.`
            playerScore++
            playerScoreDiv.textContent = `Player score: ${playerScore}`
        }
        else {
            roundResult.textContent = `Result: ${computerSelection} beats ${playerSelection}. Computer wins.`
            computerScore++
            computerScoreDiv.textContent = `Computer score: ${computerScore}`
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            roundResult.textContent = `Result: ${playerSelection} beats ${computerSelection}. Player wins.`
            playerScore++
            playerScoreDiv.textContent = `Player score: ${playerScore}`
        }
        else {
            roundResult.textContent = `Result: ${computerSelection} beats ${playerSelection}. Computer wins.`
            computerScore++
            computerScoreDiv.textContent = `Computer score: ${computerScore}`
        }
    }

    round++

    if (playerScore == 5) {
        gameResultDiv.textContent = `Player wins the game`
        restartGame()
    }

    else if (computerScore == 5) {
        gameResultDiv.textContent = `Computer wins the game`
        restartGame()
    }

    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

}



