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