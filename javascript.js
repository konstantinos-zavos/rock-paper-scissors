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
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(arr.length * Math.random())];
} 