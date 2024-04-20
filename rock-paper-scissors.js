function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function playRound(playerSelection = prompt("Choose from: rock, paper, or scissors").toLowerCase(), computerSelection = getComputerChoice()) {

    console.log(`Player choice: ${playerSelection}\nComputer choice: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        return "Draw."
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log(`${playerSelection} beats ${computerSelection}`);
            return "Player wins.";
        }
        else {
            console.log(`${computerSelection} beats ${playerSelection}`);
            return "Computer wins.";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log(`${playerSelection} beats ${computerSelection}`)
            return "Player wins.";
        }
        else {
            console.log(`${computerSelection} beats ${playerSelection}`);
            return "Computer wins.";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log(`${playerSelection} beats ${computerSelection}`)
            return "Player wins.";
        }
        else {
            console.log(`${computerSelection} beats ${playerSelection}`);
            return "Computer wins.";
        }
    }
}

function playGame() {
    playerScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++) {
        let result = playRound();

        if (result == "Player wins.") {
            playerScore++;
        }

        else if (result == "Computer wins.") {
            computerScore++;
        }

        if (result == "Draw.") {
            continue;
        }
    }

    if (playerScore == computerScore) {
        return `Player score: ${playerScore}. Computer score: ${computerScore} Draw.`
    }
    else if (playerScore > computerScore) {
        return `Player score: ${playerScore}. Computer score: ${computerScore} Player wins the game.`
    }
    else if (playerScore < computerScore) {
        return `Player score: ${playerScore}. Computer score: ${computerScore}. Computer wins the game.`
    }
}