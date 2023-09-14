
function getplayerSelection(){
    let playerChoice = "";
   document.addEventListener('DOMContentLoaded', function() {
    const buttonOne = document.getElementById("rock");
    buttonOne.addEventListener("click", function() {
        playerChoice = "rock";
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    const roundText = document.getElementById('resultText');
    if (playerChoice == "rock" && computer == "rock"){
        const roundText = document.getElementById('resultText');
        win = 'You have picked Rock. The Computer has picked Rock.\n This is a tie.';
        roundText.textContent = win;
    } if (playerChoice == "rock" && computer == "paper"){
        const roundText = document.getElementById('resultText');
        win = 'You Lose! Paper covers Rock';
        roundText.textContent = win;
    } if (playerChoice == "rock" && computer == "scissors"){
        const roundText = document.getElementById('resultText');
        win = 'You Win! Rock smashes Scissors';
        roundText.textContent = win;
    }

    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const buttonTwo = document.getElementById("paper");
    buttonTwo.addEventListener("click", function() {
        playerChoice = "paper";
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    const roundText = document.getElementById('resultText');
    if (playerChoice == "paper" && computer == "rock"){
        const roundText = document.getElementById('resultText');
        win = 'You Win! Paper covers Rock';
        roundText.textContent = win;
    } if (playerChoice == "paper" && computer == "paper"){
        const roundText = document.getElementById('resultText');
        win = 'You have picked Paper. The Computer has picked Paper.\n This is a tie.';
        roundText.textContent = win;
    } if (playerChoice == "paper" && computer == "scissors"){
        const roundText = document.getElementById('resultText');
        win = 'You Lose! Scissors cuts Paper';
        roundText.textContent = win;
    }

    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const buttonThree = document.getElementById("scissors");
    buttonThree.addEventListener("click", function() {
        playerChoice = "scissors";
        const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computer = choices[randomChoice]
    const roundText = document.getElementById('resultText');
    if (playerChoice == "scissors" && computer == "rock"){
        const roundText = document.getElementById('resultText');
        win = 'You Lose! Rock smashes scissors';
        roundText.textContent = win;
    } if (playerChoice == "scissors" && computer == "paper"){
        const roundText = document.getElementById('resultText');
        win = 'You Win! Scissors cuts Paper';
        roundText.textContent = win;
    } if (playerChoice == "scissors" && computer == "scissors"){
        const roundText = document.getElementById('resultText');
        win = 'You have picked Scissors. The Computer has picked Scissors.\n This is a tie.';
        roundText.textContent = win;
    }

    });
  });
   return playerChoice;
}

getplayerSelection()
