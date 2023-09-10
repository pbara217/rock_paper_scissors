function getcomputerSelection (){
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3)
    return choices[randomChoice]

}
function getplayerSelection(){
    const choices = ["rock", "paper", "scissors"]
    let playerChoice = prompt("Let's play a game. Please choose one of the following: Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    if ( playerChoice == choices[0] || playerChoice == choices[1] || playerChoice == choices[2]){
        return playerChoice;
    } else {
        getplayerSelection();
    }
    
}
const computerSelection = getcomputerSelection();
const playerSelection = getplayerSelection();
console.log(playerSelection + " " + computerSelection)
function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;
    let result = " ";
    if (player == "rock" && computer == "rock"){
        return "You have picked Rock. The Computer has picked Rock.\n This is a tie."
    } if (player == "paper" && computer == "paper"){
        return "You have picked Paper. The Computer has picked Paper.\n This is a tie."
    } if (player == "scissors" && computer == "scissors"){
        return "You have picked Scissors. The Computer has picked Scissors.\n This is a tie."
    }

}
console.log(playRound(playerSelection, computerSelection))