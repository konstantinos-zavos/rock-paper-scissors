
// Variables list

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let arr = "";
let pick = "";

// Functions

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(arr.length * Math.random())];
} 

function getPlayerChoice() {
    let pick = prompt("Rock Paper or Scissors?").toLowerCase(); 
    if (pick === "rock" || pick === "paper" || pick === "scissors") {
         return pick;
    } else {
    return document. location. reload() 
}

}

// function roundEnd(){
//     let arr = getPlayerChoice();
//     let pick = getComputerChoice();
//     var c = showChoices();
//     return arr && pick && c;
// }

function roundEnd(){
    let a = getComputerChoice()
    let b = getPlayerChoice()
    var c = showChoices();
    return a && b && c;
}


function draw() {
    console.log("It's a draw.");
    return roundEnd();
}

function computerWin() {
    console.log("Computer Wins!")
    computerScore = computerScore + 1;
    return roundEnd();
}

function playerWin() {
    console.log("Player wins!")
    playerScore = playerScore + 1;
    return roundEnd();
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


// console.log("Player picks "+playerSelection +".");
// console.log("Computer picks "+computerSelection +".");

// console.log(playRound(playerSelection, computerSelection));
// console.log("Player's score is: "+playerScore)
// console.log("Computer's score is: "+computerScore)


// Fresh start


// Function that console.logs the result of the current round
function roundResults() {
    console.log("Player's score is: "+playerScore)
    console.log("Computer's score is: "+computerScore)
}

//  Game Function
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        getComputerChoice();
        roundResults();
        endResult();
     }

}
game()


// Day 2 
// I need to find a way to get user's input again before looping

function endResult() {
    if (computerScore == 5) {
        console.log("*****Computer won the game!*****")
    } else if (playerScore == 5) {
        console.log("*****Player won the game!*****")
    } else if (playerScore == 0 && computerScore == 0) {
        console.log("*****It was a draw!*****")
    }
}

function showChoices() {
    if (computerScore <= 5 && playerScore <= 5) {
    console.log(">>Player picks "+playerSelection +".");
    console.log(">>Computer picks "+computerSelection +".");
} else {
    console.log("game is finito bro how you got here?");
}
    }

