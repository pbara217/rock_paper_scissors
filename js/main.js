function computerSelection (){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3)
    console.log("The Computer chose: " + choices[randomChoice])

}

computerSelection()