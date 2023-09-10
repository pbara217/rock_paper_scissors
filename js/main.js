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
function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;
    let result = " ";
    if (player == "rock" && computer == "rock"){
        return "You have picked Rock. The Computer has picked Rock.\n This is a tie."
    } if (player == "rock" && computer == "paper"){
        return "You Lose! Paper covers Rock"
    } if (player == "rock" && computer == "scissors"){
        return "You Win! Rock smashes Scissors"
    } 
    if (player == "paper" && computer == "paper"){
        return "You have picked Paper. The Computer has picked Paper.\n This is a tie."
    } if (player == "paper" && computer == "rock"){
        return "You Win! Paper covers Rock"
    } if (player == "paper" && computer == "scissors"){
        return "You Lose! Scissors cuts Paper"
    }
     if (player == "scissors" && computer == "scissors"){
        return "You have picked Scissors. The Computer has picked Scissors.\n This is a tie."
    } if (player == "scissors" && computer == "paper"){
        return "You Win! Scissors cuts Paper" 
    } if (player == "scissors" && computer == "rock"){
        return "You Lose! Rock smashes scissors"
    } 

}
function game(){
    const rounds = 6;
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 1; i < rounds; i++){
        let computerSelection = getcomputerSelection();
        let playerSelection = getplayerSelection(); 
        let outcome = playRound(playerSelection, computerSelection);
        console.log("Round " + i)
        console.log(outcome)
        if (outcome.includes("Win")){
            playerWins++
        } if (outcome.includes("Lose")){
            computerWins++
        }
        console.log("The current score is: You: " + playerWins + " Computer: " + computerWins)
    }
    console.log("The final score is: You: " + playerWins + " Computer: " + computerWins)
    if ( playerWins > computerWins){
        console.log("You Won!")
    } if (playerWins < computerWins){
        console.log("You Lost!")
    } else {
        console.log("It's a Tie!")
    }
}

game()