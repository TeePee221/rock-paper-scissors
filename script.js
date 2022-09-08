const choices = ["rock", "paper", "scissors"]


function playerChoosing() {
    const playerChoice = prompt("Choose").toLowerCase();
    console.log(`Player has chosen ${playerChoice}!!!`)
    return playerChoice
}


function computerChoice () {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
    
}

function checkWinner (playerChoice, computerChoice){
    console.log(`Computer has chosen ${computerChoice}!!`)
    if(playerChoice == computerChoice){
        return "tie";
    }
    else if( (playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "scissors" && computerChoice == "paper") ||
            (playerChoice == "paper" && computerChoice == "rock")
            ) {
                return "player"
            }
   else {
    return "Computer WON!!!";}
}

function playRound(playerChoice, computerChoice){
    const result = checkWinner(playerChoice, computerChoice);
    if(result == "tie"){
        return "It's a Tie"
    }
    else if(result == "player" ){
        return `Player WOn!!! ${playerChoice} beats ${computerChoice} !!!`
    }
    else{
        return `Computer Won!!! ${computerChoice} beats ${playerChoice} !!!`
    }
}


function game (){
    for (let i = 0; i < 5; i++) {
    const computerSelection = computerChoice();
    const playerChoice = playerChoosing(); 
     console.log(playRound(playerChoice,computerSelection));
    }
}
game()