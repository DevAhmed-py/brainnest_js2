const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const scoresText = document.querySelector(".scores");
const playerChoice = document.querySelectorAll("#btnChoice");

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;

playerChoice.forEach(button => button.addEventListener("click", () => {
    if (playerScore >= maxScore || computerScore >= maxScore) {
        if (playerScore > computerScore) {
            resultText.textContent = `Result: Game Over! Player WIN`
        } else {
            resultText.textContent = `Result: Game Over! Computer WIN`
        }

    } else {
        let player = button.innerText;
        let computer = computerPlay();
        playerText.textContent = `Player: ${player.toUpperCase()}`;
        computerText.textContent = `Computer: ${computer.toUpperCase()}`;
        resultText.textContent = `Result: ${playRound(player, computer)}`;
        scoresText.textContent = `Computer: ${computerScore} vs Player: ${playerScore}`;
    }
}));

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3) + 1
    switch (randNum) {
        case 1:
            computer = 'rock'
            break;
        case 2:
            computer = 'paper'
            break;
        case 3:
            computer = 'scissors'
            break;
    }
    return computer;
}

function playRound(playerSelection, computerSelection) {

    let result = {};
    if (playerSelection === computerSelection) {
        result.message = "It's a DRAW! Play Again!!"
        result.playerScore = playerScore;
        result.computerScore = computerScore;

    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result.message = 'Player WIN';
        result.playerScore = playerScore++;
        result.computerScore = computerScore;
        
    } else {
        result.message = 'Computer WIN';
        result.playerScore = playerScore;
        result.computerScore = computerScore++;
    }
    return result.message;
}