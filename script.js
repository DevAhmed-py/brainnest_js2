const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const scoresText = document.querySelector(".scores");
const playerChoice = document.querySelectorAll("#btnChoice");

let computerScore = 0
let playerScore = 0
let maxScore = 5

let player;
let computer;
let result;

playerChoice.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerPlay();
    playerText.textContent = `Player: ${player}`.toUpperCase();
    computerText.textContent = `Computer: ${computer}`.toUpperCase();
    // console.log(playRound(player, computer))
    resultText.textContent = `Result: ${playRound(player, computer)}`;
    // resultText.textContent = `Result: ${console.log(playRound(player, computer))}`;
    // const winner = checkWin(player, computer);
    // showResult(winner);
    scoresText.textContent = `Computer: ${computerScore} vs Player: ${playerScore}`
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
    return computer
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//       return "It's a DRAW! Play Again!!";

//     } else if (playerSelection === 'rock') {
//       if (computerSelection === 'paper') {
//         computerScore++
//         return 'Computer';
//       } else {
//         playerScore++
//         return 'Player';
//       }
//     } else if (playerSelection === 'paper') {
//       if (computerSelection === 'scissors') {
//         computerScore++
//         return 'Computer';
//       } else {
//         playerScore++
//         return 'Player';
//       }
//     } else if (playerSelection === 'scissors') {
//       if (computerSelection === 'rock') {
//         computerScore++
//         return 'Computer';
//       } else {
//         playerScore++
//         return 'Player';
//       }
//     }
// }

// function showResult(winner) {
//     if (winner === 'player') {
//         playerScore++;
//         resultText.textContent = `Result: Player WIN!!!`;
//     } else if (winner === 'computer') {
//         computerScore++
//         resultText.textContent = `Result: Computer WIN!!!`;
//     } else {
//         resultText.textContent = `Result: It's a DRAW! Play Again!!!`;
//     }
// }


// function play(e) {
//     restart.style.display = 'inline-block';
//     const playerChoice = e.target.id;
//     const computerChoice = getComputerChoice();
//     const winner = checkWin(playerChoice, computerChoice);
//     showWinner(winner, computerChoice);
//   }



// function showWinner(winner) {
//     if (winner === "Player") {
//         resultText.textContent = `Result: Player WON`;
//         playerScore++
//     } else if (winner === "Computer") {
//         resultText.textContent = `Result: Computer WON`;
//         computerScore++
//     }
// }

// function checkWinner(playerSelection, computerSelection) {

//     if (playerSelection == computerSelection) {
//         return "It's a DRAW! Play Again!!"

//     } else if (
//         (playerSelection == 'rock' && computerSelection == 'scissors') ||
//         (playerSelection == 'paper' && computerSelection == 'rock') || 
//         (playerSelection == 'scissors' && computerSelection == 'paper')) {
        
//         return 'Player'
        
//     } else if (
//         (playerSelection == 'scissors' && computerSelection == 'rock') ||
//         (playerSelection == 'rock' && computerSelection == 'paper') || 
//         (playerSelection == 'paper' && computerSelection == 'scissors')) {
        
//         return 'Computer'
//     }

// }


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
        result.message = 'You WIN';
        result.playerScore = ++playerScore;
        result.computerScore = computerScore;
        
    } else {
        result.message = 'Computer WIN';
        result.playerScore = playerScore;
        result.computerScore = ++computerScore;
    }
    
    return result.message;
}
