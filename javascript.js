// Rock paper scissors
// Computer chooses on random 
// I can choose either of the three
// First to reach score:5 wins
// Pseudo Code <----
// Get user's input
// Generate computer's choice
// Assign which option wins over which one
// Keep count on wins and finish game on 5 wins

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(arr.length * Math.random())];
} 

function getPlayerChoice() {
    const pick = prompt("Rock Paper or Scissors?").toLowerCase(); 
    return pick
}

function draw() {
    console.log("It's a draw.")
}

function computerWin() {
    console.log("Computer Wins")
    computerScore = computerScore + 1;
}

function playerWin() {
    console.log("Player wins")
    playerScore = playerScore + 1;
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        return draw();
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        return draw()
    } 
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return draw()
    } 
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return computerWin();
    } 
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return computerWin();
    } 
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return computerWin();
    } 
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return playerWin();
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return playerWin();
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return playerWin();
    }
}

// function announceRoundWinner() {
// console.log("Computer picks "+computerSelection +".");
// console.log(playRound(playerSelection, computerSelection));
// }



console.log("Computer picks "+computerSelection +".");
console.log(playRound(playerSelection, computerSelection));

console.log("Player's score is: "+playerScore)
console.log("Computer's score is: "+computerScore)


// function game() {
//     for (let i = 0; i < 5; i++) {
//     if (playerScore <= 0 || computerScore <= 0) {
//         return 
//     } else if (playerScore === 5) {
//         console.log("Player won!")
//     } else if (computerScore === 5) {
//         console.log("Computer won")
//     } 
// }
// }

// game();