// Rock paper scissors
// Computer chooses on random 
// I can choose either of the three
// First to reach score:5 wins
// Pseudo Code <----
// Get user's input
// Generate computer's choice
// Assign which option wins over which one
// Keep count on wins and finish game on 5 wins


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
}

function playerWin() {
    console.log("Player wins")
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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("Computer picks "+computerSelection +".");
console.log(playRound(playerSelection, computerSelection));


// function game() {
//     for (let i = 0; i < 5; i++)  {
//     }
// }