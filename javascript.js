let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
    });
  });

  function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(arr.length * Math.random())];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock"
    ||  computerSelection == "paper" && playerSelection == "paper" 
    ||  computerSelection == "scissors" && playerSelection == "scissors" ) {
        return gameDraw();
    } 
    else if (computerSelection == "rock" && playerSelection == "scissors"
    || computerSelection == "paper" && playerSelection == "rock"  
    || computerSelection == "scissors" && playerSelection == "paper") {
        return playerWins();

    } 
    else if (computerSelection == "scissors" && playerSelection == "rock"
    || computerSelection == "paper" && playerSelection == "scissors"
    || computerSelection == "rock" && playerSelection == "paper") {
        return playerLost();
    }
}

 
const container = document.querySelector('#container');
const scores = document.querySelector('#scores');
const computerScores = document.querySelector('#computerScores');

function playerWins() {
    const resultList = document.getElementById("container");
    resultList.removeChild(resultList.firstElementChild);
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Player Wins this round!';
    container.appendChild(content);
    playerScore += 1;
    const scoreList = document.getElementById("scores");
    scoreList.removeChild(scoreList.firstElementChild);
    const score = document.createElement('div');
    score.classList.add('playerScore');
    score.textContent = playerScore;
    scores.appendChild(score);
    endResult();
}

function playerLost() {
    const list = document.getElementById("container");
    list.removeChild(list.firstElementChild);
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Player Lost this round!';
    container.appendChild(content);
    computerScore += 1;
    const computerScoreList = document.getElementById("computerScores");
    computerScoreList.removeChild(computerScoreList.firstElementChild);
    const score = document.createElement('div');
    score.classList.add('computerScore');
    score.textContent = computerScore;
    computerScores.appendChild(score);
    endResult();
    }

function gameDraw() {
    const list = document.getElementById("container");
    list.removeChild(list.firstElementChild);
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'It\'s a draw!!';
    container.appendChild(content);
    endResult();
}

const endresults = document.querySelector('#endresult');

function endResult() {
    if (computerScore == 5) {
        const gamefinish = document.createElement('div')
        gamefinish.classList.add('gamefinish')
        gamefinish.textContent = 'Computer has won the game! Better luck next time.';
        endresults.appendChild(gamefinish);
        document.getElementById("rock").setAttribute('disabled','disabled');
        document.getElementById("paper").setAttribute('disabled','disabled');
        document.getElementById("scissors").setAttribute('disabled','disabled');
        console.log("Computer won the game???")
        document.getElementById('restart-div').style.display = 'flex';
    } else if (playerScore == 5) {
        const gamefinish = document.createElement('div')
        gamefinish.classList.add('gamefinish')
        gamefinish.textContent = 'You have won the game! Congratulations!';
        endresults.appendChild(gamefinish);
        document.getElementById("rock").setAttribute('disabled','disabled');
        document.getElementById("paper").setAttribute('disabled','disabled');
        document.getElementById("scissors").setAttribute('disabled','disabled');
        console.log("Player won the game!")
        document.getElementById('restart-div').style.display = 'flex';

    }
}

document.getElementById("restart").addEventListener("click", function() {
    location.reload();
  });

document.getElementById('restart-div').style.display = 'none';