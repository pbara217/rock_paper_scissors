function computerSelection (){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3)
    console.log("The Computer chose: " + choices[randomChoice])

}
function playerSelection(){
    const choices = [rock, paper, scissors]
    let playerChoice = prompt("Let's play a game. Please choose one of the following: Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice)
    
}
playerSelection()
computerSelection()