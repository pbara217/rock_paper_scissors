function getComputerChoice (){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3)
    console.log(randomChoice)
    console.log(choices[randomChoice])

}
getComputerChoice()