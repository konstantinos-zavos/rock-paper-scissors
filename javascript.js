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

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        console.log("It's a draw");
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        console.log("It's a draw");
    } 
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        console.log("It's a draw");
    } 
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("Computer wins this round");
    } 
    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("Computer wins this round");
    } 
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("Computer wins this round");
    } 
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You win this round");
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You win this round");
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You win this round");
    }
}
  
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));