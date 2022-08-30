const choices = ["rock", "paper", "scissors"]
const playerChoice = prompt("Choose").toLowerCase();
console.log(`Player has chosen ${playerChoice}!!!`)



function computerChoice () {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer has chosen ${choice}!!`);
    return choice
    
}

function checkWinner (playerChoice, choice){
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

const computerSelection = computerChoice();

console.log(playRound(playerChoice, computerSelection));