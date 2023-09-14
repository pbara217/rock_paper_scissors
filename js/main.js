
function getplayerSelection(){
    let playerChoice = "";
   document.addEventListener('DOMContentLoaded', function() {
    const buttonOne = document.getElementById("rock");
    buttonOne.addEventListener("click", function() {
        playerChoice = "rock";
        console.log(playerChoice);
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    console.log(computer)
    if (playerChoice == "rock" && computer == "rock"){
        console.log("You have picked Rock. The Computer has picked Rock.\n This is a tie.")
    } if (playerChoice == "rock" && computer == "paper"){
        console.log( "You Lose! Paper covers Rock")
    } if (playerChoice == "rock" && computer == "scissors"){
        console.log( "You Win! Rock smashes Scissors")
    }

    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const buttonTwo = document.getElementById("paper");
    buttonTwo.addEventListener("click", function() {
        playerChoice = "paper";
        console.log(playerChoice);
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    console.log(computer)
    if (playerChoice == "paper" && computer == "rock"){
        console.log("You Win! Paper covers Rock")
    } if (playerChoice == "paper" && computer == "paper"){
        console.log( "You have picked Paper. The Computer has picked Paper.\n This is a tie.")
    } if (playerChoice == "paper" && computer == "scissors"){
        console.log( "You Lose! Scissors cuts Paper")
    }

    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const buttonThree = document.getElementById("scissors");
    buttonThree.addEventListener("click", function() {
        playerChoice = "scissors";
        console.log(playerChoice);
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    console.log(computer)
    if (playerChoice == "scissors" && computer == "rock"){
        console.log("You Lose! Rock smashes scissors")
    } if (playerChoice == "scissors" && computer == "paper"){
        console.log( "You Win! Scissors cuts Paper")
    } if (playerChoice == "scissors" && computer == "scissors"){
        console.log( "You have picked Scissors. The Computer has picked Scissors.\n This is a tie.")
    }

    });
  });
   return playerChoice;
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

getplayerSelection()

