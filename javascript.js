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

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        const draw = console.log("It's a draw");
        return draw;
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        const draw = console.log("It's a draw");
        return draw;
    } 
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        const draw = console.log("It's a draw");
        return draw;
    } 
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        const computerWin = console.log("Computer wins this round");
        return computerWin;
    } 
    else if (computerSelection == "paper" && playerSelection == "rock") {
        const computerWin = console.log("Computer wins this round");
        return computerWin;
    } 
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        const computerWin = console.log("Computer wins this round");
        return computerWin;
    } 
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        const playerWin = console.log("You win this round");
        return playerWin;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        const playerWin = console.log("You win this round");
        return playerWin;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        const playerWin = console.log("You win this round");
        return playerWin;
    }
}

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));