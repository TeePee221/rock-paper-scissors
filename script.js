const choices = ["rock", "paper", "scissors"]


// function playerChoosing() {
//     const playerChoice = prompt("Choose Rock Paper or Scissors").toLowerCase();
//     console.log(`Player has chosen ${playerChoice}!!!`)
//     return playerChoice
// }

function playerChoosing(){
    let validatedInput = false;
    while(validatedInput == false){
        const playerChoice = prompt("Choose Rock Paper or Scissors").toLocaleLowerCase();
        if(playerChoice == null){
            continue;
        }
        if(choices.includes(playerChoice)){
            validatedInput = true;
            console.log(`Player has chosen ${playerChoice}!!!`)
            return playerChoice
        }
    }
}

function computerChoice () {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection
    
    
}

function checkWinner (playerChoice, computerSelection){
    if(playerChoice == computerSelection){
        return "tie";
    }
    else if( (playerChoice == "rock" && computerSelection == "scissors") ||
            (playerChoice == "scissors" && computerSelection == "paper") ||
            (playerChoice == "paper" && computerSelection == "rock")
            ) {
                return "player"
            }
   else {
    return "Computer WON!!!";}
}

function playRound(playerChoice, computerSelection){
    const result = checkWinner(playerChoice, computerSelection);
    console.log(`Computer has chosen ${computerSelection}!!`);
    if(result == "tie"){
        return "It's a Tie"
    }
    else if(result == "player" ){
        return `Player WOn!!! ${playerChoice} beats ${computerSelection} !!!`
    }
    else{
        return `Computer Won!!! ${computerSelection} beats ${playerChoice} !!!`
    }
}


function game (){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerChoice();
        const playerChoice = playerChoosing(); 
        console.log(playRound(playerChoice,computerSelection));
        
        console.log("------------------")
         alert("Get ready for next round!!!!")
        if(checkWinner(playerChoice, computerSelection) == "player"){
            playerScore++;
        }
        else if (checkWinner(playerChoice, computerSelection) == "Computer WON!!!" ){
            computerScore++;
        }
        else if (checkWinner(playerChoice, computerSelection) == "tie"){
            i--
        }
        
    }
    if(playerScore > computerScore){
        console.log(`Player has won ${playerScore} to ${computerScore}!!!!`)
    }
    else {
        console.log(`Computer has won ${computerScore} to ${playerScore}`)
    }
}
game()