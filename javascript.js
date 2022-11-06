
//  Variables list

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// Functions

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(arr.length * Math.random())];
} 

function getPlayerChoice() {
    const pick = prompt("Rock Paper or Scissors?").toLowerCase(); 
    if (pick === "rock" || pick === "paper" || pick === "scissors") {
         return pick;
    } else {
    return document. location. reload() 
}
}

function draw() {
    console.log("It's a draw.")
}

function computerWin() {
    console.log("Computer Wins!")
    computerScore = computerScore + 1;
}

function playerWin() {
    console.log("Player wins!")
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


// Generic Console logs

console.log("Player picks "+playerSelection +".");
console.log("Computer picks "+computerSelection +".");
console.log(playRound(playerSelection, computerSelection));
console.log("Player's score is: "+playerScore)
console.log("Computer's score is: "+computerScore)
